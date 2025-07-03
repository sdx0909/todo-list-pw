import { useState } from "react";
import Todo from "../Todo/Todo";
import toast from "react-hot-toast";

function TodoList({ list, setList }) {
  const handleEdit = (id, title) => {
    const updatedList = list.map((t) => {
      if (t.id === id) {
        t.todoData = title;
      }
      return t;
    });
    setList(updatedList);
    toast.success(`${title} updated..!`);
  };
  const handleDelete = (id) => {
    // filter() will create the array with ele that matches condition.
    // find() will give the 1st element that matches the condition
    const todo = list.find((todo) => todo.id === id);
    const updatedList = list.filter((todo) => todo.id !== id);
    setList(updatedList);
    console.log(todo);
    toast.success(`${todo.todoData} deleted!`);
  };
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isCompleted={todo.completed}
            todoData={todo.todoData}
            changeCompleted={(isCompleted) => {
              console.log("isCompleted >", isCompleted);
              const updatedList = list.map((t) => {
                if (t.id === todo.id) {
                  todo.completed = isCompleted;
                }
                return t;
              });
              setList(updatedList);
            }}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
    </div>
  );
}

export default TodoList;
