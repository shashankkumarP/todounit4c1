import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({todolists}) => {
  // sample values to be replaced
  let totalTask=0;
  let unCompletedTask = 0;
  if(todolists){
    let c =0;
    for(let i=0;i<todolists.length;i++)
    {
      if(todolists[i].done==true)
      {
        c++;
      }
    }
     totalTask= todolists.length;
     unCompletedTask=c;
  }
   
  

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h3>You have total </h3>
      <h3 data-cy="header-remaining-task"> {unCompletedTask}</h3>
      <h3 data-cy="header-total-task"> of {totalTask}</h3>
      <h3>task remaining</h3>
    </div>
  );
};

export default TaskHeader;
