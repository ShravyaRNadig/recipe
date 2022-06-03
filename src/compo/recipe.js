import indianFood from './indianFood'
import mexicanFood from './mexicanFood.json'
import americanFood from './americanFood.json'
const recipe = () => {
  const [cuisine, setCuisine] = useState({});
  const [cuisineList, setCuisineList] = useState(["Indian", "American", "Mexican"])

  const [time, setTime] = useState({});
  const [timeList, setTimeList] = useState([])

  const [recipe, setRecipe] = useState({})
  const [recipeList, setRecipeList] = useState([])

  updateTimeList = (obj) => {
    if (obj.breakfast.length > 0) {
      setTimeList(timeList.push('Breakfast'))
    } else if (obj.lunch.length > 0) {
      setTimeList(timeList.push('Lunch'))
    } else if (obj.dinner.length > 0) {
      setTimeList(timeList.push('Dinner'))
    }
  }

  updateRecipeList = (arr) => {
    arr.map((item) => {
      setRecipeList(recipeList.push(item.name)) 
    })

    // for(let i =0 ;i<arr.length;i++){
    //   setRecipeList(recipeList.push(arr[i].name))
    // }
  }

  cuisineChange = (e) => {
    switch (e.target.element) {
      case 'INDIAN':
        setCuisine(indianFood)
        updateTimeList(indianFood)
        break;
      case 'AMERICAN':
        setCuisine(americanFood)
        updateRecipeList(americanFood)
        break;
      case 'MEXICAN':
        setCuisine(mexicanFood)
        updateRecipeList(mexicanFood)
        break;  
    }
  }

  timeChange = (e) => {
    switch (e.target.element) {
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

  recipeChange = (e) => {
  time.map((item)=>{
    if(item.name === e.target.element){
      setRecipe(item)
    }
  })
  }

  return (
    <div>
      <select onSelect={cuisineChange}>
        {
          cuisineList.map((cuisineItem) => {
            <option>{cuisineItem}</option>
          })
        }
      </select>

      <select onSelect={timeChange}>
        {
          timeList.map((timeItem) => {
            <option>{timeItem}</option>
          })
        }
      </select>

      <select onSelect={recipeChange}>
        {
          recipeList.map((recipeItem) => {
            <option>{recipeItem}</option>
          })
        }
      </select>

      <DisplayRecipe data={recipe}/>
    </div>
  )
}

export default recipe