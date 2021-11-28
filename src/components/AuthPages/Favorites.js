import React from 'react';
import useToken from '../../hooks/useToken';
import FavoriteItem from './FavoriteItem';
import './FavoriteItem.scss';
import { useState, useEffect } from 'react';
import Buttons from '../Buttons';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from 'react-bootstrap';
import { useAlert } from 'react-alert'
// User Profile needs to read from the cookie and return the users Recipes based on the ID 


export default function Favorites(props) {
  const [message, setMessage] = useState('');
  const [favoriteList, setFavoriteList] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('favorite')) {
      const favorites = JSON.parse(localStorage.getItem('favorite'));
      setFavoriteList(favorites)
    }
  }, []);
  // const populateFavorites = () => {


  const removeFavorite = function (id) {
    console.log('remove you now')
    console.log('favoriteList', favoriteList)
    console.log('id', id)
    for (const key of favoriteList) {
      if (key.id === id) {
        console.log('key.id', key.id)
        const index = favoriteList.indexOf(key);
        console.log('key', key)
        favoriteList.splice(index, 1);
        setFavoriteList(favoriteList)
        console.log('favoriteList in removeFavorite', favoriteList);
        localStorage.setItem('favorite', JSON.stringify(favoriteList));
        const favorites = JSON.parse(localStorage.getItem('favorite'));
        setFavoriteList(favorites)
      }
    }

  }
  const alert = useAlert()
  const displayMessage = function () {
    if (favoriteList.length > 0) {
      setMessage('');
    }
    alert.show('You do not have any saved favorites, want to go and search some recipes?');

  }


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
    <div className="favoriteStorage">
      <h3>My Favorite Recipes:</h3>
      <Buttons onClick={clearFavorites}>
        <FontAwesomeIcon icon={faTrashAlt} />All</Buttons>
      <p>{()=> displayMessage}</p>
      <div className="favoriteCardsDiv">{mapFavorites}</div>
    </div>
  );
}

