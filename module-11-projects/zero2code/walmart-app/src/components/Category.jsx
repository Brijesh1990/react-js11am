import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Category() {
// destructuring of data via state 
const[data,setData]=useState("");
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/category`).then((response)=>{
setData(response.data);
})
},[data])
return (
<>

  <ul className='space-y-8 p-2'>
   {data && data.map((items)=>{
    return(<>
       <li><Link to="" className='text-white text-xl'>{items.categoryname}</Link></li>
    </>
    )
   })}
  </ul>

</>
)
}
