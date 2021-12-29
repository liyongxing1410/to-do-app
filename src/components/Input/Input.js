import React, { useRef } from "react";
import style from "./Input.module.css";

const Input = (props) => {
  const inputRef = useRef();
  return (
    <div className={style.inputWrapper}>
      <input
        className={style.inputItem}
        type="text"
        placeholder="Input todo"
        ref={inputRef}
      ></input>
      <button
        className={style.btnItem}
        type="button"
        onClick={() => {
          if (inputRef.current.value === "") return;
          props.onAdd(inputRef.current.value);
          inputRef.current.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
