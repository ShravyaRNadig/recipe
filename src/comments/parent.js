import { useState } from 'react';
import seeComment from './seeComment';
import addComment from './addComment';
import comment from './comment';
const parent = () => {
    const [arrObj, setArrObj] = useState([])

    onAddComment = (comment) => {
        arrObj.push(comment)
    }
    return (
        <div>
            <SeeComment commentObj={arrObj} />
            <AddComment onAddComment={onAddComment} />
        </div>
    )
}
export default parent