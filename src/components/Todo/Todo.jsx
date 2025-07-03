import { useState } from "react";

function Todo({
  todoData,
  handleDelete,
  handleEdit,
  id,
  isCompleted,
  changeCompleted,
}) {
  const [completed, setCompleted] = useState(isCompleted);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);
  return (
    <div className="flex flex-row gap-2 my-6  justify-left">
      <input
        className="rounded-full h-6 w-6 cursor-pointer bg-red-100 border-red-300 text-red-600 focus:ring-red-200 "
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          setCompleted(e.target.checked);
          changeCompleted(e.target.checked);
        }}
      />
      {isEditing ? (
        <input
          className="px-1 bg-transparent border-2 outline-none border-zinc-200 rounded-xl placeholder:text-zinc-500 focus:border-zinc-700"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className="align-center text-2xl font-bold  ">{todoData}</span>
      )}
      <div className="flex flex-wrap gap-2">
        <button
          className="px-1  text-white bg-blue-500 border-1 border-transparent rounded-lg hover:bg-blue-700"
          onClick={() => {
            setIsEditing(!isEditing);
            if (isEditing) {
              handleEdit(id, editText);
            }
          }}
        >
          {!isEditing ? `Edit` : `Save`}
        </button>
        <button
          className="px-1 py-1 text-white bg-blue-500 border-2 border-transparent rounded-lg hover:bg-blue-700"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
