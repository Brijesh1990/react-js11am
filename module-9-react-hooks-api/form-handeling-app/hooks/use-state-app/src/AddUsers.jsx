import React,{useState} from 'react'
export default function AddUsers() {
    const[users,setUsers]=useState({
        "id":1,
        "name":"brijesh",
        "age":35,
        "department":"IT",
        "salary":89500
    });

    // create a function 
    const updData=()=>{
        setUsers({
        "id":1,
        "name":"paras",
        "age":25,
        "department":"CSE",
        "salary":6500
        })
    }

    return (
    <div>

    <p>The name of Users is <span style={{backgroundColor:"yellow",color:"black"}}>{users.name} </span>  
    <br />

    The age of Users is <span style={{backgroundColor:"yellow",color:"black"}}>{users.age} </span>
    <br />
    The name of Users is <span style={{backgroundColor:"yellow",color:"black"}}>{users.department} </span>
    <br/>
    The   salary is <span style={{backgroundColor:"yellow",color:"black"}}>{users.salary} </span>
    </p>
     

     <p><button type='button' onClick={updData}>Change name </button></p>
    </div>
  )
}
