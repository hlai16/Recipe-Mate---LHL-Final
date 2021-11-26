import React from 'react';
import useToken from '../../hooks/useToken';
import FavoriteItem from './FavoriteItem';
import './FavoriteItem.scss';
// User Profile needs to read from the cookie and return the users Recipes based on the ID 


export default function Favorites(props) {
  const userIdToken = useToken();
  const user_Id = userIdToken.token;
  // const populateFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('Favorite') || "Empty");
    const favoritesArr = [favorites]
    
    const mapFavorites = favoritesArr.map(favorite =>
      <FavoriteItem key={favorite.id}
        name={favorite.name}
        image={favorite.image}
        description={favorite.description}
        // setRemoveItem={setRemoveItem}
        {...favorite} />);
  // }
  return (
    <div className="favoriteStorage">
      <h3>My Favorite Recipes:</h3>
      {mapFavorites}
    </div>
  );
}

