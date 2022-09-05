import React, { useState, useEffect } from "react";
import { useRecipe } from "../RecipeContext";
import "./styleSheets/RequestItem.css";

const RequestItem = ({ request }) => {
  const { foodRecipes, alterRecipeList, alterContributionList } = useRecipe();

  const [country, setCountry] = useState("");
  const [meal, setMeal] = useState("");
  const [dishName, setDishName] = useState("");
  const [ingredient, setIngredients] = useState([]);
  const [waysToPrepare, setWaysToPrepare] = useState([]);
  const [food, setFood] = useState(foodRecipes);
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  useEffect(() => {
    setFood(foodRecipes);
  }, [foodRecipes]);

  useEffect(() => {
    setCountry(request.country);
    setMeal(request.meal);
    setDishName(request.dishName);
    setIngredients(request.ingredient);
    setWaysToPrepare(request.waysToPrepare);
  }, [request]);

  const getIngredients = (arr) => {
    if (arr) {
      return (
        <ol>
          {arr.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      );
    }
  };

  const getWaysToPrepare = (arr) => {
    if (arr) {
      return (
        <ul>
          {arr.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    }
  };
  //
  const onAcceptRequest = () => {
    let temp = { ...food };
    temp.recipes.map((countryItem) => {
      if (countryItem.country === country) {
        console.log("Entered countryItem", countryItem);
        countryItem.data.meals.map((mealItem) => {
          if (mealItem.name === meal) {
            console.log("Entered mealItem", mealItem.name);
            let obj = {
              name: dishName,
              items: [...ingredient],
              waysToPrepare: [...waysToPrepare],
              comments: [
                {
                  name: "Author",
                  comment: "Unique dish and hope everyone loves it",
                  rating: 5,
                },
              ],
            };
            mealItem.data.push(obj);
            alterRecipeList(temp);
            if (temp.contributions != undefined) {
              let arr = temp.contributions.filter(function (item) {
                return item.dishName !== dishName;
              });
              console.log("Arr", arr);
              alterContributionList(arr);
              alert("Request Accepted, Item Added to Recipe");
              setAccepted(true);
            }
          }
        });
      }
    });
  };

  const onRejectRequest = () => {
    let temp = { ...food };
    if (temp.contributions != undefined) {
      let arr = temp.contributions.filter(function (item) {
        return item.dishName !== dishName;
      });
      console.log("Arr", arr);
      alterContributionList(arr);
      alert("Request Rejected");
      setRejected(true);
    }
  };
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
  };
  if (accepted) {
    return (
      <>
        <main className="flex">
          <div className="request">
            <p>Country: {country}</p>
            <p>Meal: {meal}</p>
            <p>Dish Name: {dishName}</p>
            <p>Dish has been accepted</p>
          </div>
        </main>
      </>
    );
  } else if (rejected) {
    return (
      <>
        <main className="flex">
          <div className="request">
            <p>Country: {country}</p>
            <p>Meal: {meal}</p>
            <p>Dish Name: {dishName}</p>
            <p>Dish has been Rejected</p>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <main className="flex">
          <div className="request">
            <p>Country: {country}</p>
            <p>Meal: {meal}</p>
            <p>Dish Name: {dishName}</p>
            <p>Ingredients: {getIngredients(ingredient)}</p>
            <p>Ways to prepare: {getWaysToPrepare(waysToPrepare)}</p>

            <div className="right">
              <button className="btn" onClick={onAcceptRequest}>
                Accept
              </button>
              <button className="btn" onClick={onRejectRequest}>
                Reject
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default RequestItem;
