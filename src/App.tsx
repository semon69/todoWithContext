import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <div>
      <TodoProvider>
        <TodoForm />
        <TodoList></TodoList>
      </TodoProvider>
    </div>
  );
}

export default App;
