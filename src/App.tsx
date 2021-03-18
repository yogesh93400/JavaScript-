import React,{useState} from 'react';

export default function App():any{
  let current = new Date().toLocaleTimeString();
   const [currtime,updatetime1] = useState(current);
   const UpdateTime = ()=>{
     let curr = new Date().toLocaleTimeString();
     updatetime1 (curr);
    
   }
return(
  <>
   <h1 >{currtime}</h1>
   <button onClick={UpdateTime}>Get Time</button>
  </>
)
};