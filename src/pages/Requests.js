import React, { useState, useEffect } from 'react';
import { useRecipe } from "../RecipeContext"
import RequestItem from '../components/RequestItem'

const Requests = () => {
    const { foodRecipes, alterRecipeList, alterContributionList } = useRecipe();

    const [food, setFood] = useState(foodRecipes);
    const [requestOptions, setRequestOptions] = useState([])

    useEffect(() => {
        setFood(foodRecipes)
    }, [foodRecipes])

    useEffect(() => {
        console.log('Food', food)
        if (food.contributions != undefined) {
            food.contributions.map((item) => {
                if (item.country) {
                    setRequestOptions(requestOptions => [...requestOptions, item])
                }
            })
            setRequestOptions(requestOptions => [...new Set(requestOptions)])
            setRequestOptions(requestOptions => requestOptions.reverse())
        }
    }, [food])



    if (requestOptions.length > 0) {
        return (
            <div>
                <h1>Requests</h1>
                <div className="request_container">
                    {requestOptions.map((item) => (
                        <RequestItem request={item} />
                    ))}

                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h3>No Requests to display</h3>
            </div>
        )
    }
}
export default Requests