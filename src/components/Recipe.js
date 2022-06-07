import React, { useState, useEffect } from 'react';
import foodRecipes from '../data/foodRecipes.json'

const Recipe = (props) => {

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
  },[])

  const changeToDefaultMealRecipe = ()  => {
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
    foodRecipes.recipes.map((item) => {
      list.push(item.country)
    })
    setCuisineList(list)
  }

  const updateMealList = (obj) => {
    setMealList([])
    setRecipeList([' '])
    const breakfast = obj.breakfast.length
    const lunch = obj.lunch.length
    const dinner = obj.dinner.length
    let i = 0
    while (i == 0) {
      if (breakfast > 0) {
        setMealList(prevState => [...prevState, 'Breakfast'])
      }
      if (lunch > 0) {
        setMealList(prevState => [...prevState, 'Lunch'])
      }
      if (dinner > 0) {
        setMealList(prevState => [...prevState, 'Dinner'])
      }
      i++
    }
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
    foodRecipes.recipes.map((item) => {
      if (value === item.country) {
        setSelectedCuisine(item.data)
        updateMealList(item.data)
      }
    })
  }

  const onMealChange = (e) => {
    changeToDefaultRecipe()
    const value = e.target.value
    setSelectedMealValue(value)
    switch (value) {
      case 'Breakfast':
        setSelectedMeal(selectedCuisine.breakfast) //array of objects
        updateRecipeList(selectedCuisine.breakfast)
        break;
      case 'Lunch':
        setSelectedMeal(selectedCuisine.lunch)
        updateRecipeList(selectedCuisine.lunch)
        break;
      case 'Dinner':
        setSelectedMeal(selectedCuisine.dinner)
        updateRecipeList(selectedCuisine.dinner)
        break;
    }
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
    setSelectedRecipe(selected)
    props.handleRecipeChange(selected)
  }

  return (
    <div>
      <select onChange={onCuisineChange} value={selectedCuisineValue}>
      <option value="default"  disabled>Select Cuisine</option>
        {
          cuisineList.map((cuisineItem) =>
            (<option value={cuisineItem}>{cuisineItem}</option>)
          )
        }
      </select>

      <select onChange={onMealChange} value={selectedMealValue}>
      <option value="default" selected disabled >Select Meal</option>
        {
          mealList.map((timeItem) =>
            (<option value={timeItem}>{timeItem}</option>)
          )
        }
      </select>

      <select onChange={onRecipeChange} value={selectedRecipeValue}>
      <option value="default" selected disabled>Select Recipe</option>
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