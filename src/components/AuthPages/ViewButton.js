import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from 'react';
import RecipeView from "./RecipeView";
import { useLocation } from "react-router";


export default function ViewButton(props) {
    const [modalShow, setModalShow] = useState(false);
    // const location = useLocation();
    // const recipeId = location.state || []

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <RecipeView
                id={props.id}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}