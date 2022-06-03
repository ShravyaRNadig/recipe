import React from "react";
const addComment = ({ onAddComment }) => {

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")

    onRatingChange = (event) => {
        setRating(event.target.value)
    }
    onCommentChange = (event) => {
        setComment(event.target.value)
    }
    onFormSubmit = () => {
        let obj = {
            foodRatng: rating,
            foodcomment: comment
        }
        onAddComment(obj)
    }
    return (
        <form>
            <input onChange={onRatingChange} value={rating} />
            <input onChange={onCommentChange} value={comment} />
            <button onClick={onFormSubmit} />
        </form>
    )
}
export default addComment