import React from 'react';
import useToken from '../../hooks/useToken';
import FavoriteItem from './FavoriteItem';
import './FavoriteItem.scss';
import { useState, useEffect } from 'react';
import Buttons from '../Buttons';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import ProfileNav from './ProfileNav';
// User Profile needs to read from the cookie and return the users Recipes based on the ID 


export default function Favorites(props) {
  // const [message, setMessage] = useState('');
  const [favoriteList, setFavoriteList] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (localStorage.getItem('favorite')) {
      const favorites = JSON.parse(localStorage.getItem('favorite'));
      setFavoriteList(favorites)
      favorites.length <= 0 && setMessage(<Alert variant="info">You don't have any recipes. Let's create some! 💡</Alert>)
    }

  }, []);
  // const populateFavorites = () => {


  const removeFavorite = function (id) {
    for (const key of favoriteList) {
      if (key.id === id) {
        const index = favoriteList.indexOf(key);
        favoriteList.splice(index, 1);
        setFavoriteList(favoriteList)
        localStorage.setItem('favorite', JSON.stringify(favoriteList));
        const favorites = JSON.parse(localStorage.getItem('favorite'));
        setFavoriteList(favorites)
      }
    }

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
  // console.log('favoriteList b4 clear', favoriteList)




  const clearFavorites = () => {
    console.log('clearing')
    localStorage.clear();
    setFavoriteList([]);
    alert.show('Favorites all cleared');
  }

  // console.log('favoriteList after clear', favoriteList)
  return (
    <>
      <ProfileNav />
      <div className="favoriteStorage">

        <h1>Your Favorite Recipes:</h1>
        <Buttons onClick={clearFavorites}>
          <FontAwesomeIcon icon={faTrashAlt} />All</Buttons>
        <div className="ifNoRecipes">{message}</div>
        <div className="favoriteCardsDiv">{mapFavorites}</div>
      </div>
    </>
  );
}

