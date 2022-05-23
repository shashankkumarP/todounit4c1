import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({updatetodostage1}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setValue] = React.useState("");
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" value={value} type="text" onChange={(e)=>{setValue(e.target.value);}} />
      <button data-cy="add-task-button" onClick={()=>{updatetodostage1(value);setValue("")}}><i className="fa-solid fa-plus"></i></button>
    </div>
  );
};

export default AddTask;
