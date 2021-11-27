import React from "react";
// import classNames from "classnames";
import './FavoriteItem.scss';
import Buttons from '../Buttons';
import { faBookReader, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { Card, Button } from "react-bootstrap";

export default function FavoriteItem(props) {
    // const [removeItem, setRemoveItem] = useState('')
    // const deleteItem = function () {
    //     props.setRemoveItem();
    //     localStorage.removeItem('Favorite');
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
                        <div>
                            <Buttons small><FontAwesomeIcon icon={faBookReader} /></Buttons>
                        </div>
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