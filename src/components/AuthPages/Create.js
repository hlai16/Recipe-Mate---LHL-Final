import React, { useState, Component } from 'react';
import { readCookie } from '../../util';
import axios from 'axios';
import NavBar from '../NavBar';

export default function Create(props) {

  return (
    <div>
      <NavBar setToken={props.setToken} />
      <h2>Create Recipe</h2>
      <form onSubmit={props.handleSubmit}>
        <label>Recipe Name:</label>
        <input
          type="text"
          name="name"
          required
          value={props.recName}
          onChange={(e) => props.setrecName(e.target.value)}
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          required
          value={props.category}
          onChange={(e) => props.setCategory(e.target.value)}
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
      <input type="button" className="btn btn-success" value="Submit Recipe" onClick={() => handleSubmit(user_id, recName, category, description, ingredients, steps, servings, time, likes, image)} />
    </div>

  );

}