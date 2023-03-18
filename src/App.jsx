import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  // const listArr = [{ todo: "Eat", isCompleted: false },
  // { todo: "Sleep", isCompleted: true }];
  const [list, setList] = useState();

  const [todo, setTodo] = useState([
    { todo: "Eat", isCompleted: false },
    { todo: "Sleep", isCompleted: true },
  ]);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = todo.concat({ todo: list, isCompleted: false });
    setTodo(newTodo);
    setList("");
  };

  const toggleCompleted = (id) => {
    let newTodos = [...todo];
    newTodos[id] = {
      todo: newTodos[id].todo,
      isCompleted: !newTodos[id].isCompleted,
    };
    setTodo(newTodos);
    // newTodos[id] = {
    //   todo: newTodos[id].todo,
    //   isCompleted: !newTodos[id].isCompleted,
    // };
    // setTodos(newTodos);
  };
  return (
    <div className="App">
      <div className="lg:h-[80%] h-[95%] lg:w-[50%] w-[90%] rounded-[.5rem] lg:rounded-[.8rem] bg-[#ffe6c4] flex flex-col items-center">
        <p className="text-[1.2rem] p-[1rem] lg:p-0 lg:text-[2.8rem] font-[400] text-center mb-3 lg:mb-6">
          Todo List
        </p>
        <form
          action="
        "
          onSubmit={addTodo}
          className="flex lg:flex-row flex-col items-center lg:w-[70%] w-[100%] justify-around mb-6 gap-4"
        >
          <input
            className="lg:w-[60%] w-[90%] border-solid border-2 p-1 border-black rounded-[.5rem]"
            type="text"
            value={list}
            onChange={(e) => {
              setList(e.target.value);
            }}
          />
          <button className="w-[90%] lg:w-[20%] border-solid border-2 border-[black]  rounded-[1rem] bg-[white] hover:bg-black hover:border-black hover:text-white">
            Add to list
          </button>
        </form>
        {/* <ol className="text-black w-[50%] list-none mt-6 font-[400] text-[1.2rem]">
          {todo.map((e, index) => (
            <li className="flex gap-8" onClick={toggleCompleted}>
              <input type="checkbox" checked={e.isCompleted} />
              {e.todo}
            </li>
          ))}
        </ol> */}
        {todo.map((e, index) => (
          <div
            onClick={toggleCompleted}
            className="text-black w-[90%] lg:w-[50%] items-center font-[400] text-[1.2rem] flex gap-2"
          >
            <input type="checkbox" checked={e.isCompleted} />
            <span
              className={e.isCompleted === true ? "completed" : "incompleted"}
            >
              {e.todo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
