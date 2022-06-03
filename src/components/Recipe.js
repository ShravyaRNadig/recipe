import React, { useState } from 'react';
import indianFood from '../data/indianFood.json'
import mexicanFood from '../data/mexicanFood.json'
import americanFood from '../data/americanFood.json'

const Recipe = (props) => {
  //alert('Entered recipe')
  const [cuisine, setCuisine] = useState({});
  const [cuisineList, setCuisineList] = useState([" ", "Indian", "American", "Mexican"])

  const [meal, setMeal] = useState({});
  const [mealList, setMealList] = useState([])

  const [dishList, setDishList] = useState([])

  //These functins help to set states to empty
  const setMealDishEmpty = () => {
    setMealList([' '])
    setDishList([' '])
    props.recipeChange({
      "name": "",
      "items": [],
      "waysToPrepare": []
      })
  }

  const setDishToEmpty = () => {
    setDishList([' '])
    props.recipeChange({
      "name": "",
      "items": [],
      "waysToPrepare": []
      })
  }

  //These are the onChange functions for the dropdown menus
  const onCuisineChange = (event) => {
    setMealDishEmpty()
    switch (event.target.value) {
      case 'Indian':
        setCuisine(indianFood)
        updateMealList(indianFood)
        break;
      case 'American':
        setCuisine(americanFood)
        updateMealList(americanFood)
        break;
      case 'Mexican':
        setCuisine(mexicanFood)
        updateMealList(mexicanFood)
        break;
      case ' ':
        setCuisine(null)
        setMealList([])
    }
  }

  const onMealChange = (e) => {
    setDishToEmpty()
    switch (e.target.value) {
      case 'Breakfast':
        setMeal(cuisine.breakfast) //array of objects
        updateRecipeList(cuisine.breakfast)
        break;
      case 'Lunch':
        setMeal(cuisine.lunch)
        updateRecipeList(cuisine.lunch)
        break;
      case 'Dinner':
        setMeal(cuisine.dinner)
        updateRecipeList(cuisine.dinner)
        break;
    }
  }

  const onDishChange = (e) => {
    let selectedRecipe
    meal.map((item) => {
      if (item.name === e.target.value) {
        selectedRecipe = item
      }
    })
    props.recipeChange(selectedRecipe)
  }

  //These function updates the dropdownmenu options list
  const updateMealList = (obj) => {
    if (obj.breakfast.length > 0 && obj.lunch.length > 0 && obj.dinner.length > 0) {
      setMealList(['Breakfast', 'Lunch', 'Dinner'])
    } else if (obj.breakfast.length > 0 && obj.lunch.length > 0) {
      setMealList(['','Breakfast', 'Lunch'])
    } else if (obj.breakfast.length > 0 && obj.dinner.length > 0) {
      setMealList(['','Breakfast', 'Dinner'])
    } else if (obj.lunch.length > 0 && obj.dinner.length > 0) {
      setMealList(['','Lunch', 'Dinner'])
    } else if (obj.breakfast.length > 0) {
      setMealList(['','Breakfast'])
    } else if (obj.lunch.length > 0) {
      setMealList(['','Lunch'])
    } else if (obj.dinner.length > 0) {
      setMealList(['','Dinner'])
    } 
  }

  const updateRecipeList = (arr) => {
    let itemNames = [' ']
    arr.map((item) => {
      itemNames.push(item.name)
    })
    setDishList(itemNames)
  }

  return (
    <div>
      <select onChange={onCuisineChange}>
        {
          cuisineList.map((cuisineItem) =>
            (<option value={cuisineItem}>{cuisineItem}</option>)
          )
        }
      </select>

      <select onChange={onMealChange}>
      <option selected> </option>
        {
          mealList.map((timeItem) =>
            (<option value={timeItem}>{timeItem}</option>)
          )
        }
      </select>

      <select onChange={onDishChange}>
        {
          dishList.map((recipeItem) =>
            <option value={recipeItem}>{recipeItem}</option>
          )
        }
      </select>

    </div>
  )
}

export default Recipe