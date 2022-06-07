import db from './firbase';
import {useState} from 'react';

const Firestore = () => {
	const [name , Setname] = useState("");
	const [age , Setage] = useState("");
	const [course , Setcourse] = useState("");
	const sub = (e) => {
		e.preventDefault();
		
		// Add data to the store
		db.collection("data").add({
			AddRecipe: addrecipe,
			ViewRequestRecipe: viewrequestrecipe
		})
		.then((docRef) => {
			alert("Data Successfully Submitted");
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
	}

	return (
		<div>
			<center>
				<form style={{marginTop:"200px" }}
				onSubmit={(event) => {sub(event)}}>
					<input type="add recipe" placeholder="Add Recipe"
					onChange={(e)=>{Setname(e.target.value)}} />
					<br/><br/>
					{/* <input type="viewrequestedrecipe" placeholder="your age"
					onChange={(e)=>{Setage(e.target.value)}}/>
					<br/><br/>
					<input type="text" placeholder="Course Enrolled"
					onChange={(e)=>{Setcourse(e.target.value)}}/> */}
					<br/><br/>
					<button type="submit">Submit</button>
				</form>
			</center>
		</div>
	);
}

export default Firestore;
