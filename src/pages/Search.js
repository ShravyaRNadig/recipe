import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useRecipe } from "../RecipeContext"
import DisplayRecipe from '../components/DisplayRecipe'

const Search = () => {
    const { foodRecipes, alterRecipeList } = useRecipe();

    const [options, setOptions] = useState([])
    const [data,setData] = useState({
		"name": "",
		"items": [],
		"waysToPrepare": "",
		"comments":[]
	})
    const [region, setRegion] = useState('')
    const [meal, setMeal] = useState('')

    useEffect(() => {
        let opt = []
        foodRecipes?.recipes.map((item) => {
            item.data.meals.map((mealItem) => {
                mealItem.data.map((dishItem) => {
                    let object = {
                        label: "Dish "+ dishItem.name + " from " + item.country,
                        value: dishItem.name,
                        data: dishItem,
                        region: item.country,
                        meal: mealItem.name
                    }
                    setOptions(prevState => [...prevState, object])
                    dishItem.items.map((ingredientsItem) => {
                        let object = {
                            label: "Ingredients "+ingredientsItem + " of dish " + dishItem.name + " from " + item.country,
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
        setMeal(opt.region)
    }

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
}

export default Search