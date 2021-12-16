import React from "react";

export default car =>  (
    <div>
        <h3>Car name: {car.name}</h3>
        <p>Year: <strong>{car.year}</strong></p>
        { car.children } 
    </div>
)