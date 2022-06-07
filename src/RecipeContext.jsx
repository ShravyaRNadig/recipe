import React, { useContext, createContext, useState, useEffect } from "react";
import food from "./data/foodRecipes.json";

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
  const [count,setCount] = useState(0)
  // useEffect(() => {
  //   setFoodRecipes(foodRecipes);
  // }, []);

  const alterRecipeList = (recipes) => {
    setFoodRecipes({...recipes});
    setCount(count+1)
  };

  return (
    <Recipe.Provider value={{ foodRecipes, alterRecipeList }}>
      {children}
    </Recipe.Provider>
  );
};

export default RecipeContext;
