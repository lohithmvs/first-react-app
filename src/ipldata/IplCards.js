import React from "react";
import "./iplcard.css"
const IplCards=(props)=>(
    <div className="card-container">
        <img src={props.src} alt="Loading.." height={100} width={100}/>
        <h4>{props.name}</h4>
        {
            props.arr.map(val=>(
                <h6>{val}</h6>
            ))
        }
        <h5>Number of Trophies: {props.cups}</h5>
    </div>
)
export default IplCards;