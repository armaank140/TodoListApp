import { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputText(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputText];
    });
    setInputText("");
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
      </div>
    </>
  );
}

export default App;
