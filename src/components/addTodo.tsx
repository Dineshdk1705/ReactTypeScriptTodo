import { FormEvent, useState } from "react";
import { useTodos } from "../store/todosStore";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo.replace(/[^a-zA-Z ]/g, ""));
    setTodo("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name=""
        placeholder="Add your todo here..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
