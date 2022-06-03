import React from "react";
const singleComment = ({ rating, comment }) => {
    return (
        <div>
            <h1>{rating}</h1>
            <h2>{comment}</h2>
        </div>
    )
}
export default singleComment