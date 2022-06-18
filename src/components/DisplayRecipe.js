import React, { useState } from 'react';
import { useRecipe } from "../RecipeContext"

const DisplayRecipe = ({
    data,
    region,
    meal
}) => {
    const { foodRecipes, alterRecipeList } = useRecipe();
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const handleAddCommentSubmit = (e) => {
        e.preventDefault();
        let food = foodRecipes
        if (comment != '' && rating != '') {
            food.recipes.map((item) => {
                if (item.country === region) {
                    item.data.meals.map((mealItem) => {
                        if (mealItem.name === meal) {
                            mealItem.data.map((recipeitem) => {
                                if (recipeitem.name === data.name) {
                                    let obj = {
                                        "name": sessionStorage.getItem('userName'),
                                        "comment": comment,
                                        "rating": rating
                                    }
                                    recipeitem.comments.push(obj)
                                    alterRecipeList(food)
                                    setComment("")
                                    setRating("")
                                }
                            })
                        }
                    })
                }
            })
        }
        else {
            alert('Enter both comment and rating')
        }

    }


    const populateComments = (commentsData) => {
        console.log('Comments', commentsData)
        if (commentsData != undefined) {
            return (
                <div className='display_comments'>
                    {commentsData.map((item) => (
                        <div className='comment_box'>
                            <p>name:{item.name}</p>
                            <p>rating:{item.rating}</p>
                            <p>comment:{item.comment}</p>
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div className='display_comments'>
                    <p>No comments</p>
                </div>
            )
        }
    }

    if (data?.name === '') {
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
                    <h1>{data?.name}</h1></div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 0.5 }}>
                    <div>
                        <h1>Ingredients</h1>
                        {data?.items.map((item) => (
                            <h5>{item}</h5>
                        ))}</div>
                    <div>
                        <h1>Instructions</h1>
                        <ul>
                            {data?.waysToPrepare.map((instruction) => (
                                <li>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1>Comments</h1>
                        <div className='comment_section'>
                            {populateComments(data.comments)}
                            <div className='add_comment'>
                                <form onSubmit={handleAddCommentSubmit}>
                                    <input
                                        type="text"
                                        value={comment}
                                        placeholder="Comment"
                                        onChange={(e) => setComment(e.target.value)}
                                    /><br /><br /><br />
                                    <input
                                        type="number"
                                        value={rating}
                                        placeholder="Rating"
                                        onChange={(e) => setRating(e.target.value)}
                                    /><br /><br /><br />
                                    <button type="submit">Add Comment</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default DisplayRecipe