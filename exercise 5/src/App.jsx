import { useState } from "react"


function App() {

  const [Products,setProducts]=useState([])
  const [prodyctname,setProductname]=useState("")

  const totalprice=Products.reduce((total,product)=>total + product.price * product.quantity,0)

const inc = (id) => {
  const updateproducts = Products.map(product =>
    product.id === id 

      ? { ...product, quantity: product.quantity + 1 }
      : product
  )

  setProducts(updateproducts)
}
const idc=(id )=>{
  const updtae=Products.map(product=>product.id===id && product.quantity > 1 ?{...product,quantity:product.quantity-1}
    :product
  )

  setProducts(updtae)
}


  const remove = (id) => {
  const updateproducts = Products.filter(product => product.id !== Number(id))
  setProducts(updateproducts)
}


  

  const [price,setPrice]=useState("")
 const  totalPrice=()=>{
  
 }





const add=()=>{
  const newproduct={
    id:Date.now(),
    text:prodyctname,
    price:Number(price),
    quantity:1

  }


  

  setProducts([...Products,newproduct])

  
}
    


  return (
    <>
    <h1>Simpe shoping card</h1>
     <h3>Add A product</h3>

     <input onChange={(e=>{setProductname(e.target.value)})} type="text" name="" id="" />
     <input  type="number" onChange={(event)=>{setPrice(event.target.value)}}  name="" id="" />
     <button onClick={add}>Add to cart</button>

     <h1>Products</h1>
      {
        
       Products.map(item=>(
        
        <li key={item.id}>
          {item.text}  ${item.price}  <br />

          <button onClick={()=>idc(item.id)} >-</button>
          <li> quantity is :{item.quantity}</li> <button onClick={()=>inc(item.id)}>+</button>
          <div>
            <button onClick={()=>remove(item.id)}>remove</button>
          </div>
          
        </li>
       ))
       
      }
       <h4>total price is {totalprice}  </h4>
   

    
    </>
    
  )
}

export default App;
