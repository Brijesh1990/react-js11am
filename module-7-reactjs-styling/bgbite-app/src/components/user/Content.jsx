import React from "react"
import Food1 from '../../assets/images/food1.png'
import Food2 from '../../assets/images/food2.png'
export default function Content()
{
    return(
        <>
        
         <section id="content" className="container w-full mt-4 flex">
        
         <div className="w-128 shadow mt-4 p-16 bg-black text-white">
            <h3 className="text-3xl">Order Now</h3>
            <hr />

            <ul className="p-5">
                <li>Punjabi Food</li>
                <li>Gujrati Food</li>
                <li>South Indian Food</li>
                <li>Terms and Conditions</li>
                <li>24x7 Customer care support</li>
                
            </ul>

        <h3 className="text-3xl mt-12">Offer Zone</h3>
        <hr />
        <img src={Food2} alt="food" className="" />
         <p className="text-center text-xl"><b>Burger combo</b></p>
         <p className="text-center text-xl"><b>Rs. 145-/</b></p>
         <p className="text-center text-xl"><button className="bg-black text-white p-3">Order Now</button></p>

         <img src={Food1} alt="food" className="" />
         <p className="text-center text-xl"><b>Burger combo</b></p>
         <p className="text-center text-xl"><b>Rs. 145-/</b></p>
         <p className="text-center text-xl"><button className="bg-black text-white p-3">Order Now</button></p>
         </div>
         <div className="w-full ms-4 shadow mt-4 p-16">
         <h3 className="text-3xl">Order Your fast Food Delivery</h3>
         <hr /> 
         
         <div className="flex">
         <div className="w-2/4">
         <img src={Food1} alt="food" className="" />
         <p className="text-center text-xl"><b>Burger combo</b></p>
         <p className="text-center text-xl"><b>Rs. 145-/</b></p>
         <p className="text-center text-xl"><button className="bg-black text-white p-3">Order Now</button></p>

         </div>
         
         <div className="w-2/4">
         <img src={Food2} alt="food" className="" />
         <p className="text-center text-xl"><b>Burger combo</b></p>
         <p className="text-center text-xl"><b>Rs. 145-/</b></p>
         <p className="text-center text-xl"><button className="bg-black text-white p-3">Order Now</button></p>
         </div>
        
         </div>


         <div className="flex mt-10">
         <div className="w-2/4">
         <img src={Food1} alt="food" className="" />
         <p className="text-center text-xl"><b>Burger combo</b></p>
         <p className="text-center text-xl"><b>Rs. 145-/</b></p>
         <p className="text-center text-xl"><button className="bg-black text-white p-3">Order Now</button></p>

         </div>
         <div className="w-2/4">
         <img src={Food2} alt="food" className="" />
         <p className="text-center text-xl"><b>Burger combo</b></p>
         <p className="text-center text-xl"><b>Rs. 145-/</b></p>
         <p className="text-center text-xl"><button className="bg-black text-white p-3">Order Now</button></p>
         </div>        
         </div>

         </div>

         </section>
        </>
    ) 
}
