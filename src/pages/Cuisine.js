import React, { useState } from 'react';
import Recipe from '../components/Recipe.js'
import DisplayRecipe from '../components/DisplayRecipe.js'

const Cuisine = () => {
	//alert('Entered cuisine')
	const [recipe, setRecipe] = useState({
		"name": "",
		"items": [],
		"waysToPrepare": ""
	})

	const handleRecipeChange = (selectedRecipe) => {
		setRecipe(selectedRecipe)
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
			<div>
				<div style={styles}>
					<Recipe handleRecipeChange={handleRecipeChange} />
					</div>
				{/* <Recipe recipeChange={recipeChange} /> */}
				<DisplayRecipe data={recipe} />
			</div>
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