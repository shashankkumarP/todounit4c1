import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from"./TaskHeader/TaskHeader";
import AddTask from"./AddTask/AddTask"
import {v4 as uuidv4} from"uuid";
import Tasks from'./Tasks/Tasks'


const TaskApp = () => {
  
  const [todolists,setTodolists] = React.useState([]);
  const updatetodostage1 = (abc)=>{
    setTodolists([...todolists,{id:uuidv4,value:abc,ischecked:false}])
  }
  const delupate=(ids)=>{
    let todoa = todolists.filter(todol=>todol.id !== ids);
    setTodolists(todoa);
  }
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask updatetodostage1={updatetodostage1}/>
      <Tasks todolists={todolists} delupdate={delupate} />
    </div>
  );
};

export default TaskApp;
