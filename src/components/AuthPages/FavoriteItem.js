import React from "react";
import classNames from "classnames";
import './FavoriteItem.scss';
import Buttons from '../Buttons';
import { faBookReader, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FavoriteItem(props) {
    // to toggle selected class

    return (
        <div className="recipeCard" onClick={props.setFavorite}>
            <div className="recipeCard--thumbnail"><img src={props.image} alt={props.name} /></div>
            <div className="recipeCard--text">
                <h5>{props.name}</h5>
                <div>{props.description}</div>
            </div>
            <div className="recipeCard--buttons">
                <div>
                    <h1 className="view"><FontAwesomeIcon icon={faBookReader} /></h1>
                </div>
                <div>
                    <h1 className="delete"><FontAwesomeIcon icon={faTrashAlt} /></h1>
                </div>
            </div>
        </div>
    );
}