import React from 'react';
const DisplayRecipe = (props) => {
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    if (Object.keys(props.data).length === 0 && props.data.constructor === Object) {
        return (
            <div>
                <h1>No recipe selected</h1>
            </div>
        )
    } else {
        return (
            <div>
                <div style={styles}>
                    <h1>{props?.data?.name}</h1></div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 0.5 }}>
                    <div>
                        <h1>Ingredients</h1>
                        {props?.data?.items.map((item) => (
                            <h5>{item}</h5>
                        ))}</div>
                    <div>
                        <h1>Instrections</h1>
                        <h5>{props?.data?.waysToPrepare}</h5>
                    </div>
                    <div>
                        <h1>Comments</h1><br />
                        <h1>Ratings</h1>
                    </div>
                </div>
            </div>
        )
    }

}

export default DisplayRecipe