import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from 'react';
import RecipeView from "./RecipeView";
import { useLocation } from "react-router";
import Buttons from '../Buttons';
import { faBookReader, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ViewButton(props) {
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <>
            <Buttons small onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faBookReader} />
            </Buttons>

            <RecipeView
                id={props.id}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}