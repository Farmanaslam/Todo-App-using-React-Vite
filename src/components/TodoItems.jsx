import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "./store/todo-items-store";
const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  const handleDelete = contextObj.handleDelete;
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => {
          return (
            <TodoItem
              key={item.todoName}
              todoName={item.todoName}
              todoDate={item.todoDate}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoItems;
