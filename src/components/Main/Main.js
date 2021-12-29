import React, { useState } from "react";
import Input from "../Input/Input";
import Item from "../Item/Item";
import style from "./Main.module.css";

const Main = (props) => {
  const [todos, setTodos] = useState([]);

  const addHandler = (todo) => {
    todos.push({
      id: todos.length ?? todos[todos.length - 1].id + 1,
      text: todo,
      isCompleted: false,
    });
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markComplete = (id) => {
    const completeTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }
      return todo;
    });
    setTodos(completeTodos);
  };
  return (
    <React.Fragment>
      <h1>To-Do List</h1>
      <h2 className={style.appDiscription}>
        Enter text into the input field to add items to your list.
      </h2>
      <h2 className={style.appDiscription}>
        Click the "X" to remove the item from your list.
      </h2>
      <h2 className={style.appDiscription}>
        Click the item to mark it as complete.
      </h2>
      <Input onAdd={addHandler}></Input>
      <ul>
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              item={todo}
              onDelete={deleteHandler}
              onClick={markComplete}
            ></Item>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Main;
