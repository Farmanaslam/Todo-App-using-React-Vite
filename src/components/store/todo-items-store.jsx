import { React, createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addTodo: () => {},
  handleDelete: () => {},
});
const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { todoName: action.payload.toDoName, todoDate: action.payload.todoDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter((item) => {
      return item.todoName !== action.payload.todoName;
    });
  }
  return newTodoItems;
};

export const TodoItemsContextProvider = ({ children }) => {
  // const [todoItems, setTodoItems] = useState([]);

  //logic using reducer hook
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addTodo = (toDoName, toDoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        toDoName,
        toDoDate,
      },
    };
    dispatchTodoItems(newItemAction);

    //logic using state hook
    // console.log(toDoName, toDoDate);
    // const newTodoItems = [
    //   ...todoItems,
    //   { todoName: toDoName, todoDate: toDoDate },
    // ];
    // setTodoItems(newTodoItems);
  };
  const handleDelete = (todoName) => {
    //logic using reduccer hook
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispatchTodoItems(deleteItemAction);

    //logic using state hook
    //   console.log(todoName);
    //   const newTodoItems = todoItems.filter((item) => {
    //     return item.todoName !== todoName;
    //   });
    //   setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addTodo: addTodo,
        handleDelete: handleDelete,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
