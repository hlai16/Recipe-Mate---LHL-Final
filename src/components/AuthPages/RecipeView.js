import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import axios from "axios";
import Buttons from '../Buttons';
import { useNavigate } from "react-router-dom";
import useVisualMode from '../../hooks/useVisualMode';
import Create from './Create';
import RecipeDetails from "./RecipeDetails";

const CREATE = "CREATE";
const DETAIL = 'DETAIL';


export default function RecipeView(props) {
    let navigate = useNavigate();
    const [recipeById, setRecipeById] = useState('');
    const recipeId = props.id
    const { mode, transition, back } = useVisualMode();

    useEffect(() => {
        axios
            .get(`/Recipes/${recipeId}`)
            .then((results) => {
                console.log('results.data[0].id before setRecipeById', results.data[0])
                setRecipeById(results.data[0])
            })

    }, [recipeId]);

    // console.log('recipeById', recipeById)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {recipeById.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Buttons small
                    onClick={() => { transition(CREATE, null) }}
                >Edit</Buttons>
                {mode === CREATE &&
                    <Create
                        name={recipeById.name}
                        ingredients={recipeById.ingredients}
                        onCancel={back}
                    />}
                <RecipeDetails
                    name={recipeById.name}
                    image={recipeById.image}
                    category_name={recipeById.category_name}
                    description={recipeById.description}
                    ingredients={recipeById.ingredients}
                    servings={recipeById.servings}
                    steps={recipeById.steps}
                    time={recipeById.time}
                />
            </Modal.Body>
            <Modal.Footer>
                <Buttons small onClick={() => navigate(`/SingleRecipe`, { state: Number(recipeById.id) })}>More</Buttons>

                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


