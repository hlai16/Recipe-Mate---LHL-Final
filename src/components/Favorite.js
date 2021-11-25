import React, { useState, useEffect } from "react";
import axios from "axios";
import './Favorite.scss';


// get our fontawesome imports
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Favorite(props) {
  

  return (< >
    
    <div className="favoriteDiv">
      <button><h1 className="favorite"><FontAwesomeIcon icon={faHeart} /></h1></button>
    </div>
 

  </>);
}
