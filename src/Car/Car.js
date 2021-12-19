import React from "react";



export default car =>  (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px'
    }}>
        <h3>Car name: {car.name}</h3>
        <p>Year: <strong>{car.year}</strong></p>
        <input type="text" onChange={car.onChangeName} value={car.name}></input>
        <button onClick={car.onDelete}>Delete</button>
    </div>
)