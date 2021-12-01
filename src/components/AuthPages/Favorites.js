import React from 'react';
import FavoriteItem from './FavoriteItem';
import './FavoriteItem.scss';
import { useState, useEffect } from 'react';
import Buttons from '../Buttons';
import { faTrashAlt, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import ProfileNav from './ProfileNav';
import { useNavigate } from "react-router-dom";


export default function Favorites() {

  const [favoriteList, setFavoriteList] = useState([]);
  const [message, setMessage] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('favorite')) {
      const favorites = JSON.parse(localStorage.getItem('favorite'));
      setFavoriteList(favorites)
      favorites.length <= 0 &&
        setMessage(
          <Alert variant="info">You don't have any recipes. Let's create some! 💡</Alert>)
    }

  }, []);



  const removeFavorite = function (id) {
    for (const key of favoriteList) {
      if (key.id === id) {
        const index = favoriteList.indexOf(key);
        favoriteList.splice(index, 1);
        setFavoriteList(favoriteList)
        localStorage.setItem('favorite', JSON.stringify(favoriteList));
        const favorites = JSON.parse(localStorage.getItem('favorite'));
        setFavoriteList(favorites)
        navigate(`/favorites`)
      }
    }
    navigate(`/favorites`)
  }
  const alert = useAlert()


  const mapFavorites = favoriteList.length > 0 && favoriteList.map(favorite =>

    <FavoriteItem key={favorite.id}
      name={favorite.name}
      id={favorite.id}
      image={favorite.image}
      description={favorite.description}
      setRemoveItem={removeFavorite}
      {...favorite} />);




  const clearFavorites = () => {
    localStorage.clear();
    setFavoriteList([]);
    alert.show('Favorites all cleared');
  }

  return (
    <>
      <ProfileNav />
      <div className="favoriteStorage">
        <div className="positionfixed">
          <h1>Your Favorite Recipes:</h1>
          <Buttons medium onClick={clearFavorites}>
            <FontAwesomeIcon icon={faTrashAlt} />All</Buttons>
        </div>

        <div className="favoriteCardsDiv">{mapFavorites}</div>
        <div className="ifNoRecipes">{message}</div>
      </div>
      <div className="toTop">
        <a href="#"><h1><FontAwesomeIcon icon={faArrowCircleUp} /> Back to Top</h1></a>
      </div>
    </>
  );
}

