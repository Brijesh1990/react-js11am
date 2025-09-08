import React,{useState} from 'react'
export default function AddEmployee() {
    const[data,setData]=useState(0);
    return (

    <div>
    <p>The count data is : {data}</p>
    <button type='button' onClick={()=>setData(data+1)}>+</button>
    <button type='button' onClick={()=>setData(data-1)}>-</button> 
    </div>
  )
}
