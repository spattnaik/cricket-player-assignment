import React, {useState} from 'react';
import PlayerList from './components/Player-List';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
const [addPressed, setAddPressed] = useState(false);
const addPlayerCallback = () => {setAddPressed(true)};
  
  return (
    <div className="App">
      <Header onAddPress={addPlayerCallback} />
      <PlayerList addPressed={addPressed} setAddPressed={setAddPressed} />
    </div>
  );
}

export default App;
