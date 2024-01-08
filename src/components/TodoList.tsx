import { useContext } from "react";
import { TTodo, TodoContext } from "../context/TodoProvider";

const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext)! || { state: [] };
  console.log(state);
  
  return (
    <div className="border-4 m-5 p-10">
      {
        state.map((item: TTodo, index: number) => 
          <p 
          className={`cursor-pointer ${item.isCompleted ? 'line-through' : ''}`}
          onClick={() => dispatch({type: 'taskComplete', payload: item.id})}>{index + 1}. {item.title}</p>
        )
      }
    </div>
  );
};

export default TodoList;