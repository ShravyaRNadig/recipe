import React from "react";

const seeComment = ({ commentObj }) => {

    return (
        commentObj.map((item, index) => {
            <Comment key={index} rating={item.rating} comment={item.comment} />
        })
    )
}

export default seeComment