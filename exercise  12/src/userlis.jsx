import { useState } from "react";

const Userlis = () => {

  const [count,setcount]=useState(0)

  const dec =()=>{
    setcount(count-1)
   
    
  }
  const inc =()=>{
    setcount(count+1)


  }

  




  
 
  return (
    <div>

      <h1>{count}</h1>

      
<button  onClick={dec}  disabled={count === 0} >decrement</button>
<button onClick={inc} >increment</button>

      
      </div>
  );
};

export default Userlis;