import AddTodo from "./components/addTodo";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import "./App.css";
import { BiNotepad } from "react-icons/bi";

const App = () => {
  return (
    <main>
      <div className="header-box">
        <h2>
          <BiNotepad />
        </h2>
        <h1>TODO REACT + TYPESCRIPT</h1>
        <h2>
          <BiNotepad />
        </h2>
      </div>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
};

export default App;
