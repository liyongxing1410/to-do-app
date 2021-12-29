import style from "./Item.module.css";

const Item = (props) => {
  return (
    <div
      className={`${style.itemWrapper} ${
        props.item.isCompleted ? style.completed : style.notCompleted
      }`}
    >
      <li
        className={style.item}
        onClick={() => {
          props.onClick(props.item.id);
        }}
      >
        {props.item.isCompleted
          ? props.item.text + " (completed)"
          : props.item.text}
      </li>
      <button
        className={`${style.btnItem} ${
          props.item.isCompleted ? style.completed : style.notCompleted
        }`}
        type="button"
        onClick={() => {
          props.onDelete(props.item.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Item;
