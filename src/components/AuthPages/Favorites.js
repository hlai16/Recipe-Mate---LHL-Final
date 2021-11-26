import React from 'react';
import useToken from '../../hooks/useToken';
import FavoriteItem from './FavoriteItem';
import './FavoriteItem.scss';
import { useState, useEffect } from 'react';
import Buttons from '../Buttons';
// User Profile needs to read from the cookie and return the users Recipes based on the ID 


export default function Favorites(props) {
  // const userIdToken = useToken();
  // const user_Id = userIdToken.token;
  // const [key, setKey] = useState(0);
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
    // for (let key of favoriteList) {
    //   if (key.id === id) {
    //     localStorage.removeItem(`'favorite'[key]`);
    //   }
    // }
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
    // const favoriteList = {...favorites}
    // if (favoriteList !== "") {
    //   setFavoriteList([]);
    //   localStorage.clear();
    //   console.log('favoriteList inside clear', favoriteList)
    //   // localStorage.setItem('favorites', JSON.stringify(favorites));
    // }
    // setFavoriteList(favorites)
  }

  // console.log('favoriteList after clear', favoriteList)
  return (
    <div className="favoriteStorage">
      <h3>My Favorite Recipes:</h3>
      <Buttons onClick={clearFavorites}>Clear Favorites</Buttons>
      <div className="favoriteCardsDiv">{mapFavorites}</div>
    </div>
  );
}

