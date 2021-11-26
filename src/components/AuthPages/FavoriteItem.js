import React from "react";
import classNames from "classnames";
import './FavoriteItem.scss';

export default function FavoriteItem(props) {
    // to toggle selected class

    return (
        <div className="recipeCard" onClick={props.setFavorite}>
            <div className="recipeCard--thumbnail"><img src={props.image} alt={props.name} /></div>
            <div className="recipeCard--text">
                <h5>{props.name}</h5>
                <div>{props.description}</div>
            </div>
        </div>
    );
}