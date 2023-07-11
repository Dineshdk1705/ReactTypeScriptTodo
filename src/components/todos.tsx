import { useTodos } from "../store/todosStrore";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  let filterData = todos;
  const [searchParams] = useSearchParams();
  const searchParamValue = searchParams.get("todos");

  if (searchParamValue == "active") {
    filterData = filterData.filter((todo) => !todo.completed);
  }

  if (searchParamValue == "completed") {
    filterData = filterData.filter((todo) => todo.completed);
  }

  return (
    <ul className="main-task">
      {filterData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
