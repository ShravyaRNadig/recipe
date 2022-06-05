import React, { useState } from 'react';
import indianFood from '../data/indianFood.json'
import mexicanFood from '../data/mexicanFood.json'
import americanFood from '../data/americanFood.json'

const Recipe = (props) => {
  //alert('Entered recipe')
  const [cuisine, setCuisine] = useState({});
  const [cuisineList, setCuisineList] = useState([" ", "Indian", "American", "Mexican"])

  const [time, setTime] = useState({});
  const [timeList, setTimeList] = useState([])

  const [recipe, setRecipe] = useState({})
  const [recipeList, setRecipeList] = useState([])

  const updateTimeList = (obj) => {
    setTimeList([' '])
    setRecipeList([' '])
    if (obj.breakfast.length > 0 && obj.lunch.length > 0 && obj.dinner.length > 0) {
      setTimeList(['','Breakfast', 'Lunch', 'Dinner'])
    } else if (obj.breakfast.length > 0 && obj.lunch.length > 0) {
      setTimeList(['','Breakfast', 'Lunch'])
    } else if (obj.breakfast.length > 0 && obj.dinner.length > 0) {
      setTimeList(['','Breakfast', 'Dinner'])
    } else if (obj.lunch.length > 0 && obj.dinner.length > 0) {
      setTimeList(['','Lunch', 'Dinner'])
    } else if (obj.breakfast.length > 0) {
      setTimeList(['','Breakfast'])
    } else if (obj.lunch.length > 0) {
      setTimeList(['','Lunch'])
    } else if (obj.dinner.length > 0) {
      setTimeList(['','Dinner'])
    }
    
  }

  const updateRecipeList = (arr) => {
    setRecipeList([])
    let itemNames = [' ']
    arr.map((item) => {
      itemNames.push(item.name)
    })
    setRecipeList(itemNames)
  }

  const cuisineChange = (event) => {
    console.log('Cuisine', event.target.value)
    switch (event.target.value) {
      case 'Indian':
        setCuisine(indianFood)
        updateTimeList(indianFood)
        break;
      case 'American':
        setCuisine(americanFood)
        updateTimeList(americanFood)
        break;
      case 'Mexican':
        setCuisine(mexicanFood)
        updateTimeList(mexicanFood)
        break;
      case ' ':
        setCuisine(null)
        setTimeList([])
    }
  }

  const timeChange = (e) => {
    switch (e.target.value) {
      case 'Breakfast':
        setTime(cuisine.breakfast) //array of objects
        updateRecipeList(cuisine.breakfast)
        break;
      case 'Lunch':
        setTime(cuisine.lunch)
        updateRecipeList(cuisine.lunch)
        break;
      case 'Dinner':
        setTime(cuisine.dinner)
        updateRecipeList(cuisine.dinner)
        break;
    }
  }

  const recipeChange = (e) => {
    let selectedRecipe
    time.map((item) => {
      if (item.name === e.target.value) {
        selectedRecipe = item
      }
    })
    props.handleRecipeChange(selectedRecipe)
  }
  return (
    <div>
      <select onChange={cuisineChange}>
        {
          cuisineList.map((cuisineItem) =>
            (<option value={cuisineItem}>{cuisineItem}</option>)
          )
        }
      </select>

      <select onChange={timeChange}>
        {
          timeList.map((timeItem) =>
            (<option value={timeItem}>{timeItem}</option>)
          )
        }
      </select>

      <select onChange={recipeChange}>
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