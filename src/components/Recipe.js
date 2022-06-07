import React, { useState, useEffect } from 'react';
import { useRecipe } from "../RecipeContext"

const Recipe = (props) => {

  const { foodRecipes, alterRecipeList } = useRecipe();

  const [recipesJson, setRecipesJson] = useState(foodRecipes)
  const [region, setRegion] = useState('')
  const [meal, setMeal] = useState('')

  const [cuisineList, setCuisineList] = useState([])
  const [selectedCuisine, setSelectedCuisine] = useState({});
  const [selectedCuisineValue, setSelectedCuisineValue] = useState('default');

  const [mealList, setMealList] = useState([])
  const [selectedMeal, setSelectedMeal] = useState({});
  const [selectedMealValue, setSelectedMealValue] = useState('default');

  const [recipeList, setRecipeList] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState({})
  const [selectedRecipeValue, setSelectedRecipeValue] = useState('default');

  useEffect(() => {
    updateCuisiineList()
  }, [])

  useEffect(() => {
    setRecipesJson(foodRecipes)
  }, [foodRecipes])

  const changeToDefaultMealRecipe = () => {
    setSelectedMealValue('default')
    setSelectedRecipeValue('default')
    props.handleRecipeChange({
      name: '',
    })
  }

  const changeToDefaultRecipe = () => {
    setSelectedRecipeValue('default')
    props.handleRecipeChange({
      name: '',
    })
  }

  const updateCuisiineList = () => {
    let list = [];
    recipesJson.recipes.map((item) => {
      list.push(item.country)
    })
    setCuisineList(list)
  }

  const updateMealList = (obj) => {
    setMealList([])
    obj.meals.map((item) => {
      if (item.data.length > 0) {
        setMealList(prevState => [...prevState, item.name])
      }
    })
  }

  const updateRecipeList = (arr) => {
    setRecipeList([])
    let itemNames = []
    arr.map((item) => {
      itemNames.push(item.name)
    })
    setRecipeList(itemNames)
  }

  const onCuisineChange = (event) => {
    changeToDefaultMealRecipe()
    const value = event.target.value
    setSelectedCuisineValue(value)
    recipesJson.recipes.map((item) => {
      if (value === item.country) {
        props.handleRegionChange(value)
        setSelectedCuisine(item.data) // data of the country is set
        updateMealList(item.data)
      }
    })
  }

  const onMealChange = (e) => {
    changeToDefaultRecipe()
    const value = e.target.value
    setSelectedMealValue(value)
    selectedCuisine.meals.map((item) => {
      if (item.name === value) {
        setSelectedMeal(item.data) // data of the different recipes available for that perticular mealis set
        updateRecipeList(item.data)
        props.handleMealChange(value)
      }
    })
  }

  const onRecipeChange = (e) => {
    const value = e.target.value
    setSelectedRecipeValue(value)
    let selected
    selectedMeal.map((item) => {
      if (item.name === value) {
        selected = item
      }
    })
    setSelectedRecipe(selected) // data of the selected recipe is set
    props.handleRecipeChange(selected)
  }

  return (
    <div>
      <select onChange={onCuisineChange} value={selectedCuisineValue}>
        <option value="default" disabled>Select Cuisine</option>
        {
          cuisineList.map((cuisineItem) =>
            (<option value={cuisineItem}>{cuisineItem}</option>)
          )
        }
      </select>

      <select onChange={onMealChange} value={selectedMealValue}>
        <option value="default" disabled >Select Meal</option>
        {
          mealList.map((timeItem) =>
            (<option value={timeItem}>{timeItem}</option>)
          )
        }
      </select>

      <select onChange={onRecipeChange} value={selectedRecipeValue}>
        <option value="default" disabled>Select Recipe</option>
        {
          recipeList.map((recipeItem) =>
            <option value={recipeItem}>{recipeItem}</option>
          )
        }
      </select>

    </div>
  )
}

export default Recipe