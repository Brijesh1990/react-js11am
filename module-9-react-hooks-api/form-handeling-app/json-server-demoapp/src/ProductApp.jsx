import React,{useEffect, useState} from 'react'

export default function ProductApp() {

const[data,setData]=useState([]);
// fetch products list using fetch method
// useEffect(()=>{
// fetch(`http://localhost:8000/addproducts`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     setData(data);
//   })
//   .catch(error => console.error("Fetch error:", error));

// },[])

useEffect(()=>{

    fetch(`http://localhost:8000/addproducts`)
    .then(response=>response.json())
    .then(data=>setData(data))
    .then(json=>console.log(json))


},[])

return (

    <>
     <h1 align='center'>Products List</h1>
      
        <div className='app'>
       
        {data && data.map((items)=>{
            return(
               
                <>
                <div className='child'>
                 <p><img src={items.photo} style={{width:"125px", height:"125px"}} /></p>
                 <p>{items.productname}</p>
                 
                 <p>Rs.{items.offerprice}</p>
                 
                 <p>{items.qty}</p>
                 
                 <p><button type='button'>AddToCart</button></p>
                 </div>
                 
                </>
                
            )
           
        })}
      
    </div>
    </>




)
}
