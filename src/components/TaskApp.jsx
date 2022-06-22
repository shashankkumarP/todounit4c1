import React, { useEffect } from "react";

import styles from "./taskApp.module.css";
import TaskHeader from"./TaskHeader/TaskHeader";
import AddTask from"./AddTask/AddTask"
import {v4 as uuidv4} from"uuid";
import Tasks from'./Tasks/Tasks'
import task from "../data/tasks.json"


const TaskApp = () => {
  
  
  const [todolists,setTodolists] = React.useState(task);
  console.log(todolists,"todolists");
  const updatetodostage1 = (abc)=>{
    setTodolists([...todolists,abc])
  }
 
  const delupate=(ids)=>{
    let todoa = todolists.filter(todol=>todol.id !== ids);
    setTodolists(todoa);
  }
  let updatecount =(a)=>{
    let todol = todolists.map((l)=>{
      if(l.id==a.id)
      {
        l.count =a.count;
      }
      return l;
      
    });

    // console.log(todol,a)

    setTodolists(todol);
    
  }
  let updatecheck=(a)=>{
    let todol  = todolists.map((l)=>{
      if(l.id==a.id)
      {
        l.done= a.done;
      }
      return l;
    })
    setTodolists(todol);
  }
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader todolists={todolists} />
      <AddTask updatetodostage1={updatetodostage1} todolists={todolists} />
      {todolists.length>0 ?<Tasks todolists={todolists} updatecount={updatecount} updatecheck={updatecheck} delupdate={delupate} />:<h1>Empty list</h1>}
    </div>
  );
};

export default TaskApp;
