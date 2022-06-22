import React from "react";
import styles from "./task.module.css";

const Task = ({delupdate,list,updatecount,updatecheck}) => {
  // NOTE: do not delete `data-cy` key value pair
  // const [count,setCount] = React.useState(0);
  const [islist,setIslist] = React.useState(list)
  let handlechange = (e)=>{
    console.log(e.target.checked);
    setIslist({...list,done:e.target.checked})
    console.log(list)

  }
  
  let clickme= (ab)=>{
    let c;
    if(ab=="dec")
    {
      c = list.count-1;
    }
    else{
      c=list.count+1;
    }
    let a = {
      id:list.id,
      count:c,
    }
    console.log("a",a)
    updatecount(a);

  }

  let checking= (e)=>{
    let ab = {
      id:list.id,
      done:e.target.checked
    }
    updatecheck(ab)
  }
  
  // 
  
  return (
    <li data-cy="task" className={styles.task} key={list.id}>
      <input type="checkbox" data-cy="task-checkbox"   onChange={checking} />
      <div data-cy="task-text" className={list.done ? styles.myinput21:styles.myinput22}>
        {list.text}
      </div>
      <div style={{display:"flex"}}>
        <button onClick={()=>{clickme("inc")}} >+</button>
        {list.count}
        <button onClick={()=>{clickme("dec")}}>-</button>
        
      </div>
       <button data-cy="task-remove-button"  onClick={()=>{delupdate(list.id)}}><i className="fa-solid fa-xmark"></i></button>
     </li>
  );
};

export default Task;
