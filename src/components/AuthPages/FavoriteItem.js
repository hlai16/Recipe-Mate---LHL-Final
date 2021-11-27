import React from "react";
// import classNames from "classnames";
import './FavoriteItem.scss';
import Buttons from '../Buttons';
import { faBookReader, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';
import { Card, Modal } from "react-bootstrap";
import axios from "axios";
import { render } from 'react-dom';
import { Navigate, useLocation } from 'react-router-dom';
import SingleRecipe from "../SingleRecipe";
import RecipeView from './RecipeView';
import ViewButton from './ViewButton';

export default function FavoriteItem(props) {
    const location = useLocation();
    const recipeId = location.state || []
    const [recipe, setRecipe] = useState([]);
    // const viewRecipe = function (id) {
    //     console.log(`viewing recipe ${id}`)
    //     axios.get(`/recipes/${id}`).then((all) => {
    //         setRecipe(all.data[0])
    //         console.log('recipe', recipe)
    //         return <RecipeView />
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // }



    return (
        <div onClick={props.setFavorite}>

            {/* bootstrap */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} alt={props.name} />
                <Card.Body>
                    <Card.Title><h5>{props.name}</h5></Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <div className="recipeCard--buttons">
                        {/* <div>
                            <Buttons small id={props.id} onClick={() => viewRecipe(props.id)}>
                                <FontAwesomeIcon icon={faBookReader} /></Buttons>
                        </div> */}
                        <ViewButton id={props.id} />
                        <div>
                            <Buttons small id={props.id} onClick={() => props.setRemoveItem(props.id)}>
                                <FontAwesomeIcon icon={faTrashAlt} /></Buttons>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}