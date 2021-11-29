import React from "react";
// import classNames from "classnames";
import './FavoriteItem.scss';
import Buttons from '../Buttons';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { Card } from "react-bootstrap";
import { Navigate, useLocation } from 'react-router-dom';
import ViewButton from './ViewButton';

export default function FavoriteItem(props) {
    const location = useLocation();
    
    return (
        <div onClick={props.setFavorite} className="favoriteCards">

            {/* bootstrap */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} alt={props.name} />
                <Card.Body>
                    <Card.Title><h3>{props.name}</h3></Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <div className="recipeCard--buttons">
                        
                        <ViewButton id={props.id} origin={'favoriteItem'}/>
                        <div>
                            <Buttons small id={props.id} onClick={() => props.setRemoveItem(props.id)}>
                                <FontAwesomeIcon icon={faTrashAlt} />Delete</Buttons>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}