import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
export default function TodoItem({ todoName, todoDate, handleDelete }) {
  return (
    <div className="container ">
      <div className="row my-2">
        <div className="col-6 ">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(todoName)}
          >
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
}
