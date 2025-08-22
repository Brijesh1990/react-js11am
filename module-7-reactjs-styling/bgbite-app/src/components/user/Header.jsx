import React from "react"
export default function Header()
{
    return(
        <>
         <section id="header" className="w-full p-10 flex shadow">
         {/* basics info */}
         <div className="p-2 ms-4 flex-initial"><b className="mt-2">Call Us <span className="bi bi-telephone"></span>(+91)-998003879</b>
         </div>  

         <div className="ms-20 p-2 flex-initial w-2/4">
         <input type="text" placeholder="search anything related to food category or menu..." className="p-2 w-full border" />
         </div>  

         <div className="flex-initial ms-20 mt-2">
            <span className="bi bi-facebook text-2xl"></span>
            <span className="bi bi-twitter text-2xl ms-2"></span>
            <span className="bi bi-instagram text-2xl ms-2"></span>
            <span className="bi bi-whatsapp text-2xl ms-2"></span>
         </div>

         </section>
        </>
    ) 
}
