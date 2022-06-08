import React, { useState, useEffect } from 'react'
import { useRecipe } from "../RecipeContext"

const Contribute = () => {

    const { foodRecipes, alterRecipeList , alterContributionList } = useRecipe();

    const [countryList, setCountryList] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('default')

    const [mealList, setMealList] = useState([])
    const [selectedMeal, setSelectedMeal] = useState('default')

    const [dishName, setDishName] = useState('')

    const [ingredient, setIngredients] = useState('')

    const [waysToPrepare, setWayToPrepare] = useState('')

    useEffect(() => {
        foodRecipes.recipes.map((item) => {
            setCountryList(countryList => [...countryList, item.country])
            item.data.meals.map((mealItem) => {
                setMealList(mealList => [...mealList, mealItem.name])
            })
        })
        setMealList(mealList => [...new Set(mealList)])
        setCountryList(countryList => [...new Set(countryList)])
    }, [])


    const onSelectedCountryValue = (event) => {
        setSelectedCountry(event.target.value)
    }
    const onSelectedMealValue = (event) => {
        setSelectedMeal(event.target.value)
    }

    const onDishNameChange = (event) => {
        setDishName(event.target.value)
    }

    const onIngredientChange = (event) => {
        setIngredients(event.target.value)
    }

    const onWayToPrepareChange = (event) => {
        setWayToPrepare(event.target.value)
    }
    const onContributionButtonClick = () => {
        const ingredientsArr = ingredient.split(',')
        const waysToPrepareArr = waysToPrepare.split(',')

        const obj = {
            country: selectedCountry,
            meal: selectedMeal,
            dishName: dishName,
            ingredient: [...ingredientsArr],
            waysToPrepare: [...waysToPrepareArr]
        }
        foodRecipes.contributions.push(obj)
        const contributions = foodRecipes.contributions
        alterContributionList(contributions)
        setDishName('')
        setIngredients('')
        setWayToPrepare('')
        alert('Thanks alot for your contribution , our admin will review it and add it to our list')
    }

    const handleAuthRedirect = () => {
        window.location.href = '/'
    }

    if (sessionStorage.getItem("auth") === 'Authenticated') {
        return (
            <div>
                <select onChange={onSelectedCountryValue} value={selectedCountry}>
                    <option value="default" disabled>Select Country</option>
                    {
                        countryList.map((countryItem) =>
                            (<option value={countryItem}>{countryItem}</option>)
                        )
                    }
                </select>

                <select onChange={onSelectedMealValue} value={selectedMeal}>
                    <option value="default" disabled>Select Meal</option>
                    {
                        mealList.map((mealItem) =>
                            (<option value={mealItem}>{mealItem}</option>)
                        )
                    }
                </select>
                <input value={dishName} onChange={onDishNameChange} placeholder='Name' />
                <textarea value={ingredient} onChange={onIngredientChange} placeholder='Ingredients (Separate the items with a comma' />
                <textarea value={waysToPrepare} onChange={onWayToPrepareChange} placeholder='List the ways to prepare (Separate the methods with a comma' />
                <button onClick={onContributionButtonClick}>Submit Contribution</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>You are not authorized to view this page</h1>
                <h2>Please login to view this page</h2>
                <button onClick={handleAuthRedirect}>Login/Signup</button>
            </div>
        )
    }
}

export default Contribute