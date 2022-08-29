import React, { useState } from 'react';
import Recipe from '../components/Recipe.js'
import DisplayRecipe from '../components/DisplayRecipe.js'

const Cuisine = () => {
	//alert('Entered cuisine')
	const [recipe, setRecipe] = useState({
		"name": "",
		"items": [],
		"waysToPrepare": "",
		"comments":[]
	})
	const [region, setRegion] = useState('')
	const [meal, setMeal] = useState('')

	const handleRecipeChange = (selectedRecipe) => {
		setRecipe(selectedRecipe)
	}

	const handleRegionChange = (val) => {
		setRegion(val)
	}

	const handleMealChange = (val) => {
		setMeal(val)
	}

	const styles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 'auto'
	};

	const handleAuthRedirect = () => {
		window.location.href = '/'
	}
	if (sessionStorage.getItem("auth") === 'Authenticated') {
		return (
			<>
			<div><br/><br/>
				<div style={styles}>
					<Recipe
						handleRecipeChange={handleRecipeChange}
						handleRegionChange={handleRegionChange}
						handleMealChange={handleMealChange}
					/>
				</div>
				<DisplayRecipe
					data={recipe}
					region={region}
					meal={meal}
				/>
			</div>
			</>
		)
	} else {
		return (
			<div>
				<h1>You are not authorized to view this page</h1>
				<h2>Please login to view this page</h2>
				<button onClick={handleAuthRedirect}>Login/Signup</button>
			</div>
		)
	}
}

export default Cuisine;