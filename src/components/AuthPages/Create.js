import React, {useState, Component} from 'react';
import NavBar from './NavBar';
import { readCookie } from '../../util';

const handleSubmit = (user, recName, category, description, ingredients, steps, servings, time, likes, image) => {
  // e.preventDefault();
  let data = {
    user: user,
    recname: recName,
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
  
}

export default function Create() {
  
  // const userId = readCookie();
  const [user, setUser] = useState('2');
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
  
      <div className="create">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipe Name:</label>
        <input
        type="text"
        required 
        value={recName}
        onChange={(e) => setrecName(e.target.value)}
      />
      <label>Category:</label>
          <input
        type="text"
        required 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
         <label>Description:</label>
          <input
        type="text"
        required 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
         <label> Ingredients:</label>
          <input
        type="text"
        required 
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
           <label> Steps:</label>
          <input
        type="text"
        required 
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
            <label> Servings:</label>
          <input
        type="text"
        required 
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />
           <label> Time:</label>
          <input
        type="text"
        required 
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
           <label> Image:</label>
          <input
        type="text"
        required 
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      </form>
      <input type="button" className="btn btn-success" value="Submit Recipe" onClick={()=>handleSubmit(user, recName, category, description, ingredients, steps, servings, time, likes, image)} />
      </div>
    </div>
  );

  }
