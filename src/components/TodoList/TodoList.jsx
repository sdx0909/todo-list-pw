import { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import toast from "react-hot-toast";
import TodoContext from "../../context/TodoContext";

function TodoList() {
  const { list, setList } = useContext(TodoContext);
  const handleEdit = (id, title) => {
    let oldTodoData;
    const updatedList = list.map((t) => {
      if (t.id === id) {
        oldTodoData = t.todoData;
        t.todoData = title;
      }
      return t;
    });
    setList(updatedList);
    toast.success(`${oldTodoData} updated..!`);
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
    <div className="align-center justify-center">
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
