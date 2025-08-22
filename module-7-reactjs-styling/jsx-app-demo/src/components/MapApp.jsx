import React from "react";
import Map from "./Map";
import Address from "./Address";
const MapApp=()=>{
    return (
        <div className="app">
            <div className="box1">
            <h1>Our office address</h1>
            <Address />
            </div>
            <div className="box2">
                
            <h1>Our Locations</h1>
            <Map />
            </div>
        </div>
    )
}

export default MapApp