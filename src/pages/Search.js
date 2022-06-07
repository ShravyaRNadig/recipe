import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useRecipe } from "../RecipeContext"
import DisplayRecipe from '../components/DisplayRecipe'

const Search = () => {
    const { foodRecipes, alterRecipeList } = useRecipe();

    const [options, setOptions] = useState([])
    const [data, setData] = useState({
        "name": "",
        "items": [],
        "waysToPrepare": "",
        "comments": []
    })
    const [region, setRegion] = useState('')
    const [meal, setMeal] = useState('')

    useEffect(() => {
        let opt = []
        foodRecipes?.recipes.map((item) => {
            item.data.meals.map((mealItem) => {
                mealItem.data.map((dishItem) => {
                    let object = {
                        label: "Dish " + dishItem.name + " from " + item.country + " cuisine",
                        value: dishItem.name,
                        data: dishItem,
                        region: item.country,
                        meal: mealItem.name
                    }
                    setOptions(prevState => [...prevState, object])
                    dishItem.items.map((ingredientsItem) => {
                        let object = {
                            label: "Ingredients " + ingredientsItem + " of dish " + dishItem.name + " from " + item.country + " cuisine",
                            value: dishItem.name,
                            data: dishItem,
                            region: item.country,
                            meal: mealItem.name
                        }
                        setOptions(prevState => [...prevState, object])
                    })
                })
            })

        })
    }, [])

    const handleSelectChange = (opt) => {
        setData(opt.data)
        setMeal(opt.meal)
        setRegion(opt.region)
    }

    const handleAuthRedirect = () => {
        window.location.href = '/'
    }

    if (sessionStorage.getItem("auth") === 'Authenticated') {
        return (
            <div>
                <Select
                    options={options}
                    onChange={handleSelectChange}
                />
                <DisplayRecipe
                    data={data}
                    region={region}
                    meal={meal}
                />
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

export default Search