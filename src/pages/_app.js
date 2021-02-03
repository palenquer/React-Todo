import "tailwindcss/tailwind.css";
import "../styles/globals.css"
import ActiveLink from "../components/ActiveLink";
import Button from "../components/Button";
import React, { useState } from "react";
import TodoField from "../components/TodoField";

function MyApp({ Component, pageProps }) {
  const [todo, setTodo] = useState([]);
  const [change, setChange] = useState("");

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    change.length >= 1 ? setTodo([change, ...todo]) : null
    setChange("");
    console.log(todo)
  };

  return (
    <div className="font-sans h-screen w-screen p-4">
      <header className="flex justify-center mt-3">
        <h1 className="text-3xl">#todo</h1>
      </header>
      <main className="flex justify-center flex-col w-full items-center">
        <ul className="flex justify-evenly mt-9 border-b-2 w-full md:max-w-2xl items-center">
          <li className="w-20 flex justify-center">
            <ActiveLink href="/">
              <a>All</a>
            </ActiveLink>
          </li>
          <li className="w-20 flex justify-center">
            <ActiveLink href="/active">
              <a>Active</a>
            </ActiveLink>
          </li>
          <li className="w-20 flex justify-center">
            <ActiveLink href="/completed">
              <a>Completed</a>
            </ActiveLink>
          </li>
        </ul>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between w-full md:max-w-2xl h-11 mt-4"
        >
          <input
            className="border-solid border-2 border-gray-200 rounded-lg p-2 w-full outline-none focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="add details"
            onChange={handleChange}
            value={change}
          />
          <Button />
        </form>
        <div className="flex justify-center flex-col w-full items-center mt-4">
          {
            todo.length >= 1 ? todo.map((todoText, todoItem) => {
              return (
                <div key={todoItem} className="flex justify-between flex-col w-full md:max-w-2xl h-11">
                  <TodoField name={todoText} />
                </div>
              )
            })
            : "Enter a todo Item"
          }
        </div>
      </main>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
