import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContextProvider } from "./components/store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
      </center>
      <AddTodo />
      <WelcomeMsg />
      <TodoItems />
    </TodoItemsContextProvider>
  );
}

export default App;
