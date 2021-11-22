import './App.scss';
import './index.scss';
import useApplicationData from "./hooks/useApplicationData";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeItem from './components/RecipeItem';
import UserProfile from './components/AuthPages/UserProfile';
import Search from './components/AuthPages/Search';
import Create from './components/AuthPages/Create';
import AuthPages from './components/AuthPages';
import { useState } from 'react';
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
  const [token, setToken] = useState();
  if (!token) {
    return <Home setToken={setToken} />
  }
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


          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user_profile" element={<AuthPages />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipeItem" element={<RecipeItem />} />

        </Routes>
      </BrowserRouter>
    </main>

  );
}

export default App;

