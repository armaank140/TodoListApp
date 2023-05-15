import React from "react";
import "./App.css";

export default function ToDoList(props) {
  return (
    <>
      <li>
        {props.text}{" "}
        <button
          className="del-btn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <i className="fa-solid fa-trash" />
        </button>
      </li>
    </>
  );
}
