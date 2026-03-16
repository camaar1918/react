import { useState,useEffect } from 'react'


function App() {

  const [name,setName]=useState("")
  const [greet,setGreet]=useState("")

  useEffect(
    ()=>{

      document.title= name==""? "welcome": greet+name
    },
    [name]
  )
  

  return (
    <>

    <div>
    <h1>enter your name</h1>
      <input onChange={(e)=>setName(e.target.value)}  placeholder = 'name'type="text" />
      <h1>choose a greeting</h1>
      <input onChange={(e)=>setGreet(e.target.value)}  placeholder='greeting' type="text" />
    </div>
     
    </>
  )
}

export default App
