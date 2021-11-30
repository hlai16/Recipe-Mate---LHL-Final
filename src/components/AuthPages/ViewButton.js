
import { useState } from 'react';
import RecipeView from "./RecipeView";
import Buttons from '../Buttons';
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ViewButton(props) {
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <>
            <Buttons small onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faBookReader} />View
            </Buttons>

            <RecipeView
                id={props.id}
                origin={props.origin}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}