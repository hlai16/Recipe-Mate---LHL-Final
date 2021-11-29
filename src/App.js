import './App.scss';
import './index.scss';
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import RecipeItem from './components/UserRecipes';
import SingleRecipe from './components/SingleRecipe';
import Search from './components/Search/index';
import Create from './components/AuthPages/Create';
import AuthPages from './components/AuthPages';
import useToken from './hooks/useToken';
import getRecipesWithSearch from './components/Helpers/getRecipesWithSearch';
import RecipeList from './components/RecipeList';
import UserProfile from './components/AuthPages/UserProfile';
import Favorites from './components/AuthPages/Favorites';
import CreatedRecipes from './components/AuthPages/CreatedRecipes';
// import Login from './components/Login';
// import UserProfile from './components/AuthPages/UserProfile';
// import useApplicationData from "./hooks/useApplicationData";


function App() {
  const { token, setToken } = useToken();
 
  if (!token) {
    return <Home setToken={setToken} />
   } 

  return (
    <main className="App layout wood-bkg">
     
      <BrowserRouter>
        <Routes>

            {/* <Route exact path="/" element={<UserProfile />} /> */}
            <Route exact path="/" element={<UserProfile setToken={ setToken } />} />
            <Route path="/search" element={<Search setToken={ setToken } />} />
            <Route path="/login" element={<Home setToken={setToken} />} />
            <Route path="/authpages" element={<AuthPages setToken={ setToken } />} />
            <Route path="/create" element={<Create setToken={ setToken } />} />
            <Route path="/recipeItem" element={<RecipeItem setToken={ setToken } />} />
            <Route path="/SingleRecipe" element={<SingleRecipe setToken={ setToken }/>} />
            <Route path="/recipes" element={<RecipeList setToken={setToken} recipes={ getRecipesWithSearch }/>} />
            <Route path="/userRecipes" element={<CreatedRecipes/>} />
            <Route path="/favorites" element={<Favorites />} />

        </Routes>
      </BrowserRouter>
    </main>

  );
}

export default App;