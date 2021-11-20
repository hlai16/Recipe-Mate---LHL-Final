
import './App.scss';
import './index.scss';
import useApplicationData from "./hooks/useApplicationData";
// import Buttons from './components/Buttons.js';
import LandingForm from "./components/LandingForm.js";

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
      <div className="HeroImg">
        <div className="redBorder"></div>
        <img
          src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/landing/public/images/heroImg.jpeg?raw=true"
          alt="Hero Img"
          width="550"
        />
      </div>
      <section className="sidebar">
        
          <img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Recipe Mate"
            width="200"
          />
          <LandingForm />
        
      </section>
    </main>
  );
}

export default App;
