import './App.scss';
import './index.scss';
import useApplicationData from "./hooks/useApplicationData";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeItem from './components/RecipeItem';
import SingleRecipe from './components/SingleRecipe';
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from "react-bootstrap";



// const RequiresLogin = (props) => {
//   const isLoggedIn = true;
//   if(isLoggedIn) { 
//     return props.children;
//   } 
//   return <Home />
// }


function App() {
  const { state } = useApplicationData();
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


<<<<<<< HEAD
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user_profile" element={<AuthPages />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipeItem" element={<RecipeItem />} />
=======
            <Route exact path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user_profile" element={<UserProfile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/recipeItem" element={<RecipeItem />} />
            <Route path="/SingleRecipe" element={<SingleRecipe />} />
>>>>>>> 49d29b11e8f222fa1a818186a63ea9eb62cdf045

        </Routes>
      </BrowserRouter>
    </main>

  );
}

export default App;

