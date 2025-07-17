import { nanoid } from "nanoid";
import { useCallback, useContext, useState } from "react";
import Todo from "../Todo/Todo";
import toast from "react-hot-toast";
import TodoContext from "../../context/TodoContext";

function AddTodo() {
  const { list, setList } = useContext(TodoContext);
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
    <div className="flex flex-row gap-2">
      <input
        className="w-full px-4 py-3 bg-transparent border-1 outline-none border-zinc-300 rounded-xl placeholder:text-zinc-500 focus:border-zinc-700"
        type="text"
        placeholder="add new todo..."
        value={inputText}
        // setting the input-field
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="px-3 py-1 text-white bg-blue-500 border-2 border-transparent rounded-lg hover:bg-blue-700"
        onClick={inputText.length > 0 ? handleAdd : undefined}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
