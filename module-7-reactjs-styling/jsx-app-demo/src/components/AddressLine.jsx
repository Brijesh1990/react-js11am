import React from "react";
import { AddressLine1,AddressLine2,AddressLine3,AddressLine4 } from "./AddressApp";
const AddressLine=()=>{
    return(
        <>
            <div className="myapp">
            <div className="box1">
            <h1>Our office address Line1</h1>
            <AddressLine1 />
            </div>
            <div className="box2">
            <h1>Our office address Line2</h1>
            <AddressLine2 />
            </div>
            <div className="box3">
            <h1>Our office address Line3</h1>
            <AddressLine3 />
            </div>
            <div className="box4">
            <h1>Our office address Line4</h1>
            <AddressLine4 />
            </div>
            </div>
        </>
    ) 
}
export default AddressLine