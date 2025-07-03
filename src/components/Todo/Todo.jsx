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
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          setCompleted(e.target.checked);
          changeCompleted(e.target.checked);
        }}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{todoData}</span>
      )}
      <button
        onClick={() => {
          handleEdit(id, editText);
          setIsEditing(!isEditing);
        }}
      >
        {!isEditing ? `Edit` : `Save`}
      </button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default Todo;
