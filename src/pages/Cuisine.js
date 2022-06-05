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

	const recipeChange = (selectedRecipe) => {
		setRecipe(selectedRecipe)
	}

	const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
		width:'auto'
      };

	return (
		<div>
			<div style={styles}><Recipe recipeChange={recipeChange} /></div>
			{/* <Recipe recipeChange={recipeChange} /> */}
			<DisplayRecipe data={recipe} />
		</div>
	)
}

export default Cuisine;