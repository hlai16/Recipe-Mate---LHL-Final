import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import Buttons from '../Buttons';
import { useNavigate } from "react-router-dom";
import useVisualMode from '../../hooks/useVisualMode';
import Edit from './Edit';
import RecipeDetails from "./RecipeDetails";

const EDIT = "EDIT";



export default function RecipeView(props) {
    let navigate = useNavigate();
    const [recipeById, setRecipeById] = useState('');
    const recipeId = props.id
    const { mode, transition, back } = useVisualMode();
    

    useEffect(() => {
        axios
            .get(`/Recipes/${recipeId}`)
            .then((results) => {
                setRecipeById(results.data[0])
            })

    }, [recipeId]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1>{recipeById.name}</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Buttons small
                    onClick={() => { transition(EDIT, null) }}
                >{props.origin === "createdRecipes" ? 'Edit' : 'Clone'}</Buttons>
                <Button variant="danger"
                    onClick={back}
                >Cancel</Button>
                {mode === EDIT &&
                    <Edit
                        origin={props.origin}
                        id={recipeById.id}
                        name={recipeById.name}
                        ingredients={recipeById.ingredients}
                        description={recipeById.description}
                        image={recipeById.image}
                        steps={recipeById.steps}
                        category={recipeById.category_id}
                        time={recipeById.time}
                        serving={recipeById.servings}
                        onCancel={back}
                    />}
                {mode !== EDIT && 
                  <RecipeDetails
                    name={recipeById.name}
                    image={recipeById.image}
                    category_name={recipeById.category_name}
                    description={recipeById.description}
                    ingredients={recipeById.ingredients}
                    servings={recipeById.servings}
                    steps={recipeById.steps}
                    time={recipeById.time}
                />}
            </Modal.Body>
            <Modal.Footer>
                <Buttons small
                    onClick={() => navigate(`/SingleRecipe`,
                        { state: Number(recipeById.id) })}>More...</Buttons>

                <Button onClick={props.onHide} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


