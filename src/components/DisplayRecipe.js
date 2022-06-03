import React from 'react';
const DisplayRecipe = (props) => {
        return (
            <div>
                <h1>{props.data.name}</h1>
                {props.data.items.map((item) => (
                    <h2>{item}</h2>
                ))}
                <br />
                <h>{props.data.waysToPrepare}</h>
            </div>
        )
    
}

export default DisplayRecipe