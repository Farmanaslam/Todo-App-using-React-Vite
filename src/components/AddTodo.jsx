import React, { useRef, useState, useContext } from "react";
import { MdAdd } from "react-icons/md";
import { TodoItemsContext } from "./store/todo-items-store";

export default function AddTodo() {
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const handleAddBtn = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    console.log(todoName, todoDate);
    addTodo(todoName, todoDate);
  };
  const contextObj = useContext(TodoItemsContext);
  const addTodo = contextObj.addTodo;
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            className="w-100"
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
            placeholder="Enter date here"
            className="w-100"
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={handleAddBtn}>
            <MdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
