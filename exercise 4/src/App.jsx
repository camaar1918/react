import { useState } from 'react'


function App() {
  const [count, setCount] = useState(true)

  const isii=()=>{

    setCount(!count)

  }

  return (
    <>
     <p>the button is {count ? "on": "off"} </p>
     <button onClick={isii}>turn { count ? "of" : "on"}</button>
    </>
  )
}

export default App
