import React, { useContext, createContext, useState, useEffect } from "react";
import food from "./data/foodRecipes.json";
import { readFirebase } from "./firebase/functions";
import db from "./firebase/config";
import { onValue, ref, set, update } from "firebase/database";

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
  alterContributionList: () => {}
});

export const useRecipe = () => {
  return useContext(Recipe);
};

const RecipeContext = ({ children }) => {
  const dummyObj = {
    recipes: [
      {
        country: "",
        data: {
          meals: [
            {
              name: "",
              data: [
                {
                  name: "",
                  items: [""],
                  waysToPrepare: [""],
                  comments: [{}],
                },
              ],
            },
          ],
        },
      },
    ],
    contributions: [
      {
        country: "",
        meal: "",
        dishName: "",
        ingredient: [],
        waysToPrepare: [],
      },
    ],
  };
  const [foodRecipes, setFoodRecipes] = useState(dummyObj);
  const [count, setCount] = useState(0);

  useEffect(() => {
    onValue(ref(db, "foodRecipes"), (data) => {
      console.log("Data from APi context", data.val());
      setFoodRecipes((foodRecipes) => ({ ...data.val() }));
    });
  }, []);

  const alterRecipeList = (recipes) => {
    setFoodRecipes({ ...recipes });
    update(ref(db, "foodRecipes"), {
      recipes: [...recipes.recipes],
    });
  };

  const alterContributionList = (contributions) => {
    setFoodRecipes((foodRecipes) => ({ ...foodRecipes, contributions }));
    update(ref(db, "foodRecipes"), {
      contributions: [...contributions],
    });
  }

  return (
    <Recipe.Provider value={{ foodRecipes, alterRecipeList , alterContributionList}}>
      {children}
    </Recipe.Provider>
  );
};

export default RecipeContext;
