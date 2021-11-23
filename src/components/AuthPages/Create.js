import React, {useState, Component} from 'react';
import { readCookie } from '../../util';
import axios from 'axios';
import NavBar from '../NavBar';


const handleSubmit = (user_id, recName, category, description, ingredients, steps, servings, time, likes, image) => {
  // e.preventDefault();
  let data = {
    user_id: user_id,
    name: recName,
    category: category,
    description: description,
    ingredients: ingredients,
    steps: steps,
    servings: servings,
    time: time,
    likes: likes,
    image: image
  };
  console.log("Data to be posted ", data);
  axios.post(`users/${user_id}/recipes`, {...data })
}


export default function Create(props) {
  
  // const userId = readCookie();
  const [user_id, setUser] = useState('2');
  const [category, setCategory] = useState('');
  const [recName, setrecName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] =useState('');
  const [servings, setServings] = useState('');
  const [time, setTime] = useState(''); 
  const [likes, setLikes] = useState('0')
  const [image, setImage] = useState('')

  return (
    <div>
      <NavBar setToken={ props.setToken }/>
      <div className="create">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipe Name:</label>
        <input
        type="text"
        name="name"
        required 
        value={recName}
        onChange={(e) => setrecName(e.target.value)}
      />
      <label>Category:</label>
          <input
        type="text"
        name="category"
        required 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
         <label>Description:</label>
          <input
        type="text"
        name="description"
        required 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
         <label> Ingredients:</label>
          <input
        type="text"
        name="ingredients"
        required 
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
           <label> Steps:</label>
          <input
        type="text"
        name="steps"
        required 
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
            <label> Servings:</label>
          <input
        type="text"
        name="servings"
        required 
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />
           <label> Time:</label>
          <input
        type="text"
        name="time"
        required 
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
           <label> Image:</label>
          <input
        type="text"
        name="image"
        required 
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      </form>
      <input type="button" className="btn btn-success" value="Submit Recipe" onClick={()=>handleSubmit(user_id, recName, category, description, ingredients, steps, servings, time, likes, image)} />
      </div>
    </div>
  );

  }