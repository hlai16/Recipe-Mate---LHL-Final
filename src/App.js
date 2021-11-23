import './App.scss';
import './index.scss';
import useApplicationData from "./hooks/useApplicationData";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeItem from './components/RecipeItem';
import SingleRecipe from './components/SingleRecipe';
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from "react-bootstrap";
import Search from './Search';
import UserProfile from './components/AuthPages/UserProfile';
import Create from './components/AuthPages/Create';
import AuthPages from './components/AuthPages';
import Login from './components/Login';
import { useState } from 'react';
import useToken from './hooks/useToken';
// import Login from './components/Login';


// const RequiresLogin = (props) => {
//   const isLoggedIn = true;
//   if(isLoggedIn) { 
//     return props.children;
//   } 
//   return <Home />
// }

function App() {
  const { state } = useApplicationData();
  const { token, setToken } = useToken();
 
  if (!token) {
    return <Home setToken={setToken} />
   } 
  //  else {
  //   return (
  //     <Login
  //       // setToken={setToken}
  //       // onCancel={back}
  //     />
  //   );
  // }
  
  const recipeList = state.recipes.map(recipe => {
    return (
      <li className="recipeInfo">
        {recipe.name}
      </li>
    )
  });

  return (
    <main className="App layout wood-bkg">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>

            <Route exact path="/" element={<AuthPages setToken={ setToken } />} />
            <Route path="/search" element={<Search setToken={ setToken } />} />
            <Route path="/login" element={<Home setToken={setToken} />} />
            <Route path="/create" element={<Create setToken={ setToken } />} />
            <Route path="/recipeItem" element={<RecipeItem setToken={ setToken } />} />
            <Route path="/SingleRecipe" element={<SingleRecipe setToken={ setToken }/>} />

        </Routes>
      </BrowserRouter>
    </main>

  );
}

export default App;