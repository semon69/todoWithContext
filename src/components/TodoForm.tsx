import React, { useContext, useState } from "react";
import { TTodo, TodoContext } from "../context/TodoProvider";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext)!;
  const [task, setTask] = useState("");

//   console.log(state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo: TTodo = {
      id: Math.random().toString(36).substring(2, 8),
      title: task,
      isCompleted: false,
    };
    // console.log(todo);
    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div className="border-4 m-5 p-10">
      <h1>Creating a TODO for next day</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="border-4 p-5 m-5 space-x-3"
      >
        <label htmlFor="">Add Todo</label>
        <input
          type="text"
          className="border-2 border-black px-2"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-blue-800 text-white rounded hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
