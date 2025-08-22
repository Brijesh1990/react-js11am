import React from 'react'
const emp=[
    {
        id:1,
        name:"alpesh thakur",
        age:32,
        department:"IT"
    },
    {
        id:2,
        name:"vijay dinanath thakur",
        age:33,
        department:"CSE"
    },
    {
        id:3,
        name:"Kaushik",
        age:22,
        department:"IT"
    },
]
export default function EmployeeApp() {
  return (

    <>
    <div className='app'>
        <h1>Employee List</h1>
        <div className="parent">
            {emp && emp.map((items)=>{
                return(
                    <>
                    <div className="child">
                     <p><b>Employee Id : {items.id}</b></p>
                     <p><b>Employee Name : {items.name}</b></p>
                     <p><b>Employee age : {items.age}</b></p>
                     <p><b>Employee department : {items.department}</b></p>   
                    </div>
                    </>
                )
            })}
        </div>
    </div>
    </>

)
}
