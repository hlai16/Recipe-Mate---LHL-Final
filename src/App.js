
import './App.css';
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const { state } = useApplicationData();
  return (
    <div className="App">
      <h2>{state.recipes[0].name}</h2>
    </div>
  );
}

export default App;
