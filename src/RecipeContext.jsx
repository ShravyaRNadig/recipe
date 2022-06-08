import React, { useContext, createContext, useState, useEffect } from "react";
import food from "./data/foodRecipes.json";
import { readFirebase } from "./firebase/functions";
import db from "./firebase/config";
import { onValue, ref, set , update} from "firebase/database";

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
  const dummyObj = {
    "recipes": [
      {
        "country": "",
        "data": {
          "meals": [
            {
              "name": "",
              "data": [
                {
                  "name": "",
                  "items": [""],
                  "waysToPrepare": [""],
                  "comments": [{}]
                }
              ]
            }
          ]
        }
      }
    ]
  };
  const [foodRecipes, setFoodRecipes] = useState(dummyObj);
  const [count, setCount] = useState(0);

  useEffect(() => {
    onValue(ref(db, "foodRecipes"), (data) => {
      //console.log("Data from APi context", data.val());
        setFoodRecipes(foodRecipes=>({ ...data.val() }));
    });
  },[]);

  const alterRecipeList = (recipes) => {   
    setFoodRecipes({ ...recipes });
    update(ref(db, "foodRecipes"), {
      recipes: [...recipes.recipes],
    })
  };

  return (
    <Recipe.Provider value={{ foodRecipes, alterRecipeList }}>
      {children}
    </Recipe.Provider>
  );
};

export default RecipeContext;
