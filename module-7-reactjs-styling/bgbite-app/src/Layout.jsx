import React from "react";
import Header from "./components/user/Header";
import Navbar from "./components/user/Navbar";
import Slider from "./components/user/Slider";
import Content from "./components/user/Content";
import Footer from "./components/user/Footer";
// const Layout=()=>{
//     return (
//         <>

//         </>
//     )
// }
// export default Lyout

// function Layout()
// {
//     return(
//         <>

//         </>
//     ) 
// }

// export default Layout

export default function Layout()
{
    return(
        <>
        {/* bigibite header panel components reused*/}
        <Header />
        {/* bigibite navbar panel components reused*/}
        <Navbar />
        {/* bigibite slider panel components reused*/}
        <Slider />
        {/* bigibite content panel components reused*/}
        <Content />
        {/* bigibite footer panel components reused*/}
        <Footer />
         
        </>
    ) 
}
