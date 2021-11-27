// import { Button, Modal } from "react-bootstrap";
// import { useState, useEffect } from 'react';
// import { useLocation } from "react-router";
// import axios from "axios";
import Buttons from '../Buttons';
// import { useNavigate } from "react-router-dom";
// import useVisualMode from '../../hooks/useVisualMode';
// import Create from './Create';


export default function RecipeDetails(props) {

    // console.log('recipeById', recipeById)

    return (
        <>

            <div className="recipeUrlDiv--img">
                <img src={props.image} alt="display image" />
            </div>

            <h4>About</h4>
            <p>{props.description}</p>
            <table className="table recipe-presentation">
                <tbody>
                    <tr>
                        <th scope="row">Good for</th>
                        <td>{props.category_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">About</th>
                    </tr>
                    <tr>
                        <th scope="row">Ingredients</th>
                        <td>{props.ingredients}</td>
                    </tr>
                    <tr>
                        <th scope="row">How to prepare</th>
                        <td>{props.steps}</td>
                    </tr>
                    <tr>
                        <th scope="row">Servings</th>
                        <td>{props.servings}</td>
                    </tr>
                    <tr>
                        <th scope="row">Preparation time</th>
                        <td>{props.time}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}


