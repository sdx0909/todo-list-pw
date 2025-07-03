import { nanoid } from "nanoid";
import { useState } from "react";
import Todo from "../Todo/Todo";
import toast from "react-hot-toast";

function AddTodo({ list, setList }) {
  // make a new state for input-field
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    // creating the new todo-object
    const newTodo = {
      id: nanoid(),
      todoData: inputText,
      completed: false,
    };
    setList([...list, newTodo]);
    setInputText("");
    toast.success("Added new todo!");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="add new todo..."
        value={inputText}
        // setting the input-field
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={inputText.length > 0 && handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;
