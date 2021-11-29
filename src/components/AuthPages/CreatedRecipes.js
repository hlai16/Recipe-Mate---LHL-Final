import React, { useState, useEffect } from "react";
import axios from "axios";
import Buttons from '../Buttons';
import useToken from '../../hooks/useToken';
import { Card } from "react-bootstrap";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './index.scss';
import './FavoriteItem.scss';
import ProfileNav from "./ProfileNav";
import ViewButton from "./ViewButton";
import { Alert } from "react-bootstrap";

export default function CreatedRecipes(props) {
    const userIdToken = useToken();
    const userId = userIdToken.token;
    const [moreFromUser, setMoreFromUser] = useState([]);
    const [message, setMessage] = useState('');
    const location = useLocation();
    const recipes = location.state || []
    let navigate = useNavigate();


    useEffect(() => {
        if (userId) {
            axios.get(`/Users/${userId}/recipes`)
                .then((results) => (
                    setMoreFromUser(results.data)

                ))
            moreFromUser.length <= 0 ? setMessage(<div className="ifNoRecipes"><Alert variant="info">
                You don't have any recipes. Let's create some! 💡
            </Alert></div>) : setMessage('')
        }
    }, [])


    const handleDelete = function (id, key) {
        axios.delete(`/recipes/${id}`).then(() => {
            moreFromUser.splice(key, 1)
            if (localStorage.getItem('favorite')) {
                const favorites = JSON.parse(localStorage.getItem('favorite'));
                const filterFavorites = favorites.filter(favorite => favorite.id === id);
                if (filterFavorites.length > 0) {
                    favorites.splice(key, 1);
                }
                localStorage.setItem('favorite', JSON.stringify(favorites));
                setMoreFromUser(moreFromUser)
                navigate(`/userRecipes`)
                if (moreFromUser.length <= 0) {
                    alert("You don't have any recipes. Let's create some! 💡");

                }
            }
        })
    }


    return (
        <>
            <ProfileNav />
            <section className="createdRecipesDiv">

                <h1> *****All your recipe Creations*****</h1>
                <div className="ifNoRecipes">{message}</div>
                <div className="otherRecipesBySameUser--inner">{moreFromUser.map((recipe, key) => (
                    <div key={key}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
                            <Card.Body>
                                <Card.Title>{recipe.name}</Card.Title>
                                <Card.Text>
                                    {recipe.description}
                                </Card.Text>
                                <ViewButton id={recipe.id} />
                                {/* <Buttons small onClick={() => navigate(`/SingleRecipe`, { state: Number(recipe.id) })} >Visit</Buttons> */}
                                {/* <Buttons small onClick={() => navigate(`/SingleRecipe`, { state: Number(recipe.id) })}> Modify</Buttons> */}
                                <Buttons small onClick={() => handleDelete(recipe.id, key)}><FontAwesomeIcon icon={faTrashAlt} />Remove</Buttons>
                            </Card.Body>
                        </Card>

                    </div>

                ))}
                </div>
            </section>
        </>

    );

}


