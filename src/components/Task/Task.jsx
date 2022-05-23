import React from "react";
import styles from "./task.module.css";

const Task = ({delupdate,list}) => {
  // NOTE: do not delete `data-cy` key value pair
  // const [count,setCount] = React.useState(0);
  const [ischecked,setIschecked] = React.useState(list.ischecked)
  // 
  
  return (
    <li data-cy="task" className={styles.task} key={list.id}>
      <input type="checkbox" data-cy="task-checkbox" className={ischecked ? styles.myinput11:styles.myinput12} checked={ischecked} onChange={(e)=>{setIschecked(e.target.checked)}} />
      <div data-cy="task-text" className={ischecked ? styles.myinput21:styles.myinput22}>
        {list.value}
      </div>
    
      {/* Counter here */}
       <button data-cy="task-remove-button"  onClick={()=>{delupdate(list.id)}}><i className="fa-solid fa-xmark"></i></button>
     </li>
  );
};

export default Task;
