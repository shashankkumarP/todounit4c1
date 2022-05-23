import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"
const Tasks = ({delupdate,todolists}) => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(todolists);
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {todolists.map((list)=>(
          <Task key={list.id} list={list} delupdate={delupdate} />
          
        ))}
       
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
