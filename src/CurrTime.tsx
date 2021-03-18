import React, { useState } from 'react';

export function CurrTime(){
    let time = new Date().toLocaleTimeString();
    const [curr,setCurr] = useState(time);
 
  const currtime = ()=>{
    let update = new Date().toLocaleTimeString();
    setCurr(update);
  }

  setInterval(currtime,1000);
    return(
        <h1>{curr}</h1>
    )
}