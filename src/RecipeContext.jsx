import React, { useContext, createContext, useState, useEffect } from "react";
import food from "./data/foodRecipes.json";
import test from './data/test.json'

const Recipe = createContext({
  foodRecipes: {
    recipes: [
      {
        country: "Indian",
        data: {},
      },
    ],
  },
  alterRecipeList: () => {},
});

export const useRecipe = () => {
  return useContext(Recipe);
};

const RecipeContext = ({ children }) => {
  const [foodRecipes, setFoodRecipes] = useState(food);

  // useEffect(() => {
  //   setFoodRecipes(foodRecipes);
  // }, []);

  const alterRecipeList = (list) => {
    setFoodRecipes(list);
    console.log('List',list)
  };

  return (
    <Recipe.Provider value={{ foodRecipes, alterRecipeList }}>
      {children}
    </Recipe.Provider>
  );
};

export default RecipeContext;
