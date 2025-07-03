import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { Toaster } from "react-hot-toast";

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
    <>
      <Toaster position="top-center" />
      <AddTodo list={list} setList={setList} />
      <TodoList list={list} setList={setList} />
    </>
  );
}

export default App;
