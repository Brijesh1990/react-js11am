import React from "react"
export default function Navbar()
{
    return(
        <>
        <section id="navbar" className="navbar bg-black p-6">
            <ul className="flex-initial text-white flex space-x-14 ms-12">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Food Menu</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Book Tables</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">CreateAccount</a></li>
            </ul>
        </section>
        </>
    ) 
}
