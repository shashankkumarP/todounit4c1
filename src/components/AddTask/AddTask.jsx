import React from "react";
import { useState } from "react";
import {v4 as uuidv4} from "uuid"
import styles from "./addTask.module.css";

const AddTask = ({updatetodostage1,todolists}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setValue] = React.useState("");
  // console.log(todolists)
  let [form,setForm] = useState({
    id:"",
    text:"",
    done:false,
    count:1
  });
  let abcd;
  let handlechange = (e)=>{
    let {name,value}= e.target
    let f={...form,id:uuidv4(),[name]:value}
    setForm(f);
    abcd = true;
    // console.log(abcd);

  }
  let handleclick=()=>{
    if(abcd==false) return;
    let a = false;
    for(let i=0;i<todolists.length;i++)
    {
      if(todolists[i].text===form.text || form.text==="")
      {
        a=true;
      }

    
    }
    console.log(form,form.text,a)
    if(a==false)
    {
      updatetodostage1(form);
      console.log(todolists);
    }
    abcd=false;
  }


  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" name="text"  type="text" onChange={handlechange} required/>
      <button data-cy="add-task-button" onClick={handleclick}><i className="fa-solid fa-plus"></i></button>
    </div>
  );
};

export default AddTask;
