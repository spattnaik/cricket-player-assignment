import React, { useState } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PlayerList from './components/Player-List';
import Home from './components/Home';
import Schedules from './components/Schedules';

function App(props) {
    const [addPressed, setAddPressed] = useState(false);
    const addPlayerCallback = () => setAddPressed(true)

    return (
        <div className="App">
            <Header onAddPress={addPlayerCallback} />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/cricketers' render={() => (
                    <PlayerList addPressed={addPressed} setAddPressed={setAddPressed} />
                )} />
                <Route exact path='/schedules' component={Schedules} />
                <Route render={function () {
                    return <p>Not found</p>
                }} />
            </Switch>
        </div>
    );
}

export default App;
