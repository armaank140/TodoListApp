import { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";
import { useEffect } from "react";

const getLocalStorage = () => {
  let List = localStorage.getItem("List");
  if (List) {
    return JSON.parse(localStorage.getItem("List"));
  } else {
    return [];
  }
};

function App() {
  const [inputText, setInputText] = useState("");
  const [Items, setItems] = useState(getLocalStorage);
  const [ErrorMsg, setErrorMsg] = useState("");

  const itemEvent = (event) => {
    setInputText(event.target.value);
  };

  const listOfItems = () => {
    if (inputText == 0) {
      setErrorMsg("Add your ToDo!");
    } else {
      setItems((oldItems) => {
        return [...oldItems, inputText];
      });

      setInputText("");
      setErrorMsg("");
    }
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, Index) => {
        return Index !== id;
      });
    });
    setErrorMsg("Item Deleted");
    setInterval(() => {
      setErrorMsg("");
    }, 1000);
  };

  const ClearList = () => {
    // setErrorMsg('All Data Clear');
    if (Items == 0) {
      setErrorMsg("Add your ToDo!");
    } else {
      setItems([]);
    }
  };

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(Items));
  }, [Items]);

  return (
    <>
      <div className="wrapper">
        <h1>Todo App</h1>
        <span className="ErrorMsg">{ErrorMsg} </span>

        <div className="inputField">
          <input
            type="text"
            placeholder="Add your new todo"
            onChange={itemEvent}
            value={inputText}
          />

          <button className="button" role="button" onClick={listOfItems}>
            +
          </button>
        </div>

        <ul className="todoList">
          {/* <li>{inputText}</li> */}
          {Items.map((itemval, Index) => {
            return (
              <ToDoList
                text={itemval}
                key={Index}
                id={Index}
                onSelect={deleteItems}
              />
            );
          })}
        </ul>
        <button type="button" className="Clr-Button" onClick={ClearList}>
          Clear List
        </button>
      </div>
    </>
  );
}

export default App;
