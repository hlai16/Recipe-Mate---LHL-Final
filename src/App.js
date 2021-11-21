import './App.scss';
import './index.scss';
import useApplicationData from "./hooks/useApplicationData";
import Buttons from './components/Buttons.js';
import LandingForm from "./components/LandingForm.js";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Search from './components/Search/index';
import UserProfile from './components/UserProfile';
import { useState } from "react";
import RecipeItem from './components/RecipeItem';

const RequiresLogin = (props) => {
  const isLoggedIn = true;
  if(isLoggedIn) { 
    return props.children;
  } 
  return <Home />
}

function App() {
  const { state } = useApplicationData();
  const recipeList = state.recipes.map(recipe => {
    return (
      <li className="recipeInfo">
        {recipe.name}
      </li>
    )
  });
  // let navigate = useNavigate();
  // let [error, setError] = useState(null);

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   let result = await (event.target);
  //   if (result.error) {
  //     setError(result.error);
  //   } else {
  //     navigate('success');
  //   }
  // }

  return (
    <main className="App layout">
       
        {/* <form onSubmit={handleSubmit} /> */}
        <BrowserRouter><Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/recipeItem" element={<RecipeItem />} />

        </Routes></BrowserRouter>
    </main >
  );
}

export default App;

