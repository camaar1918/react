import { useState } from "react"


function App() {

  const [name, setName] = useState("")

 const handleclick=(event)=>{

    setName(event.target.value)


  }
    


  return (
    <>

    <input onChange={handleclick} type="text" name="" id="" />
    <p>my name is {name}</p>
    </>
    
  )
}

export default App;
