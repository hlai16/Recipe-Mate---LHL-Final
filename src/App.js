import './App.scss';
import './index.scss';
import useApplicationData from "./hooks/useApplicationData";
import Buttons from './components/Buttons.js';
import LandingForm from "./components/LandingForm.js";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Search from './components/Search/index';
import Create from './components/Create';
import UserProfile from './components/UserProfile';
import { useState } from "react";
import RecipeItem from './components/RecipeItem';
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from "react-bootstrap";

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
    <main className="App layout wood-bkg">

      <BrowserRouter>
        <section className="navDiv">
          <Navbar bg="white" expand="lg" sticky="top">
            <Navbar.Brand><Link to={'/'} className="nav-link"><img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/logo.png?raw=true" alt="logo" width="100"></img></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to={'/'} className="nav-link">Home</Link></Nav.Link>
                <Nav.Link><Link to={'/search'} className="nav-link">Categories</Link></Nav.Link>
                <Nav.Link><Link to={'/create'} className="nav-link">Create</Link></Nav.Link>

              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </section>
        <div classNAME="routesDiv">
          <Routes>


            <Route exact path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user_profile" element={<UserProfile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/recipeItem" element={<RecipeItem />} />

          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;

