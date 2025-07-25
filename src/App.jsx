import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { Toaster } from "react-hot-toast";
import TodoContext from "./context/TodoContext";

function App() {
  // for global-access
  const [list, setList] = useState([
    {
      id: 1,
      todoData: "todo1",
      completed: false,
    },
    {
      id: 2,
      todoData: "todo2",
      completed: true,
    },
    {
      id: 3,
      todoData: "todo3",
      completed: false,
    },
  ]);

  return (
    <TodoContext.Provider value={{ list, setList }}>
      <div className="max-w-lg px-5 m-auto mb-20 my-10">
        <h2 className="flex justify-center text-3xl font-bold underline my-3">
          My ToDo'S
        </h2>
        <Toaster position="bottom-right" />
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
