import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './components/Task1/Home';
import Navbar from './components/Navbar';
import Task2 from './components/Task2/Task2';
import './App.css';

function App() {
  const [active, setActive] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/task2">
          <div id="wrapper" className="wrapper">
            <Task2
              active={active}
              setActive={setActive}
            />
            <Navbar
              active={active}
              setActive={setActive}
            />
            <Sidebar
              active={active}
              setActive={setActive}
            />
          </div>
        </Route>
        <Route path="/">
          <div id="wrapper" className="wrapper">
            <Navbar
              active={active}
              setActive={setActive}
            />
            <Sidebar
              active={active}
              setActive={setActive}
            />
            <Home
              active={active}
              setActive={setActive}
            />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
