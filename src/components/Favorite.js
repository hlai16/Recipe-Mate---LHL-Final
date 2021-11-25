// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Favorite.scss';
// import { useLocation } from "react-router";


// // get our fontawesome imports
// import { faHeart, faCross } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function Favorite(props) {
//     const [recipeById, setRecipeById] = useState('');
//     // const location = useLocation();
//     const recipeId = props.recipeId;
//     // const toggleAdd = () => {
//     //     submit ? <h1 className="favorite"><FontAwesomeIcon icon={faHeart, faCross} /></h1>
//     //     : <h1 className="favorite"><FontAwesomeIcon icon={faHeart} /></h1>;
//     // }

//     useEffect(() => {
//         axios
//             .get(`/Recipes/${recipeId}`)
//             .then((results) => setRecipeById(results.data[0]))
//         console.log('recipeById.id', props.recipeById.id)
//     }, []);

//     return (< >

//         <form className="favoriteDiv">
//             <button type="submit">
//                 <h1 className="favorite"><FontAwesomeIcon icon={faHeart} /></h1>
//             </button>
//         </form>


//     </>);
// }
