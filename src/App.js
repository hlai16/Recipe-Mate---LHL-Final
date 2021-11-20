import './App.scss';
import useApplicationData from "./hooks/useApplicationData";
import Buttons from './components/Buttons.js';

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
    <main className="App layout">
      <div className="heroImg">
        <img 
          src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/landing/public/images/heroImg.jpeg?raw=true"
          alt="logo"
          width="500"
        />
      </div>
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
          width="300"
        />

      </section>
      <section className="schedule">
        
      </section>
    </main>
  );
}

export default App;