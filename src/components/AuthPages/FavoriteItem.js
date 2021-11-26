import React from "react";
import classNames from "classnames";

export default function FavoriteItem(props) {
    // to toggle selected class
    const favoriteClass = classNames("favorite__item", {

    });

    return (
        <div className={favoriteClass} onClick={props.setFavorite}>
            <div className="recipeUrlDiv--thumbnail"><img src={props.image} alt={props.name} /></div>
                <div className="otherRecipesBySameUser--text">
                    <h5>{props.name}</h5>
                    <div>{props.description}</div>
                </div>
            {props.selected && props.name}
            
        </div>
    );
}