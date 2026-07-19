import { useState,useEffect } from "react";
import './App.css'

export default function Counter(){
    const[count, setCount]=useState("");
    const[isOverLimit,setLimit]=useState(false);
    useEffect(()=>{
if(count.length>10){
    setLimit(true);
    if(isOverLimit){
    alert("Message is too long");
}}
else{
    setLimit(false);
}
    },[count]);

    // function add(event){
    //     setCount(event.target.value);
    // }

    const add=(event)=>setCount(event.target.value);
return(
    <div className='counter'>
        <h1> Mini Post Composer</h1>
    <input type="text" value={count} onChange={add}></input>
    <p>Number of Characters: {count.length}</p>
    </div>
)
}