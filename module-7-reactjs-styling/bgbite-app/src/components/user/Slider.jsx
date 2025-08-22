import React from "react"
import slider from '../../assets/images/slider.gif'
export default function Slider()
{
    return(
        <>
         <section id="slider" className="container mt-4">
         <img src={slider} alt="slider" className="img-fluid w-full h-72" />  
         </section>
        </>
    ) 
}
