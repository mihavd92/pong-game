import './App.css';
import Game from "./Components/Game";
import Instructions from "./Components/Instructions";

function App() {
  return (
    <div className="App">
        <div className="content-inner">
            <Instructions />
            <Game />
        </div>
    </div>
  );
}

export default App;
