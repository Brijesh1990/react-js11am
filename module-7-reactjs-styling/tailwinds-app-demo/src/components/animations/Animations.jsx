import React from "react";
const Anim=()=>{
    return (
        <>
            <div className="w-3/4 mx-auto mt-14 bg-sky-300 p-20 animate-pulse">
                <h1 className="text-4xl animate-bounce">Register Now</h1>
                <hr className="border border-spacing-3 border-black w-52" />
                <p className="text-justify animate-pulse text-md">We offer the full spectrum of services to help organizations work better. Everything from creating standards of excellence to training your people to work in more effective ways, assessing how you’re doing, and helping you perform even better in future. Very few others do this, and none have been doing it as long as we have.</p>

                <div className="container p-14 mt-14 flex">  
                <div className="w-1/3 m-5 p-14 bg-yellow-400 flex-initial">Brijesh</div>
                <div className="w-1/3 m-5 p-14 bg-yellow-400">Jigar</div>
                <div className="w-1/3 m-5 p-14 bg-yellow-400">Samir</div>
                </div>
            </div>
        </>
    )
}

export default Anim