import React from 'react';
const DisplayRecipe = (props) => {
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    if (props.data.name === '') {
        return (
            <div>
                <h1>No recipe selected</h1>
                <h3>Please selected desired options in the dropdown above</h3>
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
                        <h1>Instructions</h1>
                        <ul>
                            {props?.data?.waysToPrepare.map((instruction) => (
                                <li>{instruction}</li>
                            ))}
                        </ul>
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