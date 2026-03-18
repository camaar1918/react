
import { useState } from "react"




const Userlis=()=>{

    const [users,setUsers]=useState([{id:1,name:'abdisamad',email:'100abdisamad101@gmail.com'}])

    return(

        <>

       <div>
        <ul>

            {

                users.map(user=>(
                    <li  key={user.id}>Name:{user.name } <br /> Email:{user.email}</li>
                ))
            }

        </ul>
       </div>
        
        </>
    )

}

export default Userlis;