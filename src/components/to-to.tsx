"use client";

import { useState } from "react";
import { type todo } from "../server/db/schema";
import { createTodo } from "../server/actions/create-todo";

type TodoListProps =  {
  todoItems: (typeof todo.$inferSelect)[];
}

const TodoList: React.FC<TodoListProps> = ({ todoItems }) => {
  const [todos, setTodos] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput) {
      return;
    }
    setTodos([...todos, userInput]);
    setUserInput("");
    await createTodo(userInput)
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-600">
      <h1 className="text-2xl text-slate-300">Todo list</h1>

      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="todo-item"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="m-3 rounded-md bg-orange-500 p-2" type="submit">
          create todo
        </button>
      </form>
      <div className="text-2xl text-slate-100">{
        todoItems.map((item)=>{
          return <div key={item.id}>
            {item.task}
          </div>
        })
        }</div>
    </div>
  );
};

export default TodoList;
