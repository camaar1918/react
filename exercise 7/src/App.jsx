import { useState,useEffect } from 'react'


function App() {

  
  
  const [trucker,setTrucker]=useState({x:0,y:0})
 

  useEffect( ()=>{

    const  handleTrucker= (e)=>{
      setTrucker({x:e.x, y:e.y})

    }
     window.addEventListener("mousemove", handleTrucker
 

  )})
  

  return (
    <>

    <div>
      <h3>Mouse x: {trucker.x}</h3><br />
      <h3> Mouse y: {trucker.y}</h3>


    </div>
      
    </>
  )
}

export default App
