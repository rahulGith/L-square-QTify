import './App.css';
import Button from './components/Button/Button';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Button text={"Give Feedback"}/>
      <Searchbar/>
    </div>
  );
}

export default App;
