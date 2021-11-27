import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import axios from "axios";


export default function RecipeView(props) {
    
    const [recipeById, setRecipeById] = useState('');
    const recipeId = props.id
    console.log('recipeId', recipeId)
    useEffect(() => {
        axios
            .get(`/Recipes/${recipeId}`)
            .then((results) => {
                console.log('results.data[0].id before setRecipeById', results.data[0])
                setRecipeById(results.data[0])
                console.log('results.data[0] after setRecipeById', results.data[0])
                console.log('results.data[0].id after setRecipeById', results.data[0].id)
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
                <h3>{recipeById.name}</h3>

                <div className="recipeUrlDiv--img">
                    <img src={recipeById.image} alt="display image" />
                </div>

                <h4>About</h4>
                <p>{recipeById.description}</p>
                <table className="table recipe-presentation">
                    <tbody>
                        <tr>
                            <th scope="row">Good for</th>
                            <td>{recipeById.category_name}</td>
                        </tr>
                        <tr>
                            <th scope="row">About</th>
                        </tr>
                        <tr>
                            <th scope="row">Ingredients</th>
                            <td>{recipeById.ingredients}</td>
                        </tr>
                        <tr>
                            <th scope="row">How to prepare</th>
                            <td>{recipeById.steps}</td>
                        </tr>
                        <tr>
                            <th scope="row">Servings</th>
                            <td>{recipeById.servings}</td>
                        </tr>
                        <tr>
                            <th scope="row">Preparation time</th>
                            <td>{recipeById.time}</td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


