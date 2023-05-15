import { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [Items, setItems] = useState([]);
  const [errormsg, setErrorMsg] = useState("");
  // const [LocalData, setLocalData] =useState([]);

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

      // localStorage.setItem("todoData", JSON.stringify(Items));

      // const LocalArrayData = localStorage.getItem('todoData');
      // const parseLAD = JSON.parse(LocalArrayData);
      // console.log(parseLAD);
      // setLocalData(parseLAD);

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
  };

  return (
    <>
      <div className="wrapper">
        <h1>Todo App</h1>
        {/* {LocalData} */}
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
        <span className="ErrorMsg">{errormsg} </span>

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
      </div>
    </>
  );
}

export default App;
