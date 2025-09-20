import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

export default function Layout() {
// applied loader
const[loader,setLoader]=useState(false);
// applied loader for 2seconds 
useEffect(()=>{
setTimeout(()=>{
setLoader(true);
},3000)
});

return (
<>
{!loader ? (
<>
{/* <div className='text-center  position-absolute' style={{fontSize:"25px",marginLeft:"45%",marginTop:"15%"}}>      
<div className='spinner-border text-primary' style={{width:"85px",height:"85px"}}></div>
<div className='spinner-border text-dark' style={{width:"85px",height:"85px"}}></div>
<div className='spinner-border text-danger' style={{width:"85px",height:"85px"}}></div>
</div> */}
<div className='text-center  position-absolute' style={{fontSize:"25px",marginLeft:"35%",marginTop:"10%"}}> 
<img src='https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif' className='w-50' /> 

</div>
</>
) : (
<>
<Navbar />
<Home />

</>

)}

</>

)
}
