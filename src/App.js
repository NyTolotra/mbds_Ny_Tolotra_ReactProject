import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Username from "./components/Username";
import ListeHobbies from "./components/ListeHobbies";
import About from "./components/About";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";

import { FaHome } from "react-icons/fa";
import { FaMusic } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';



function App() {
  let nom = "Hello Madagascar";

  return (
    
    <div>
      <BrowserRouter>
      <div className="App-header">
      <Link to="/"><FaHome/>Home</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/rock">GroupeRock</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/ui">Albums <FaMusic/><FaMusic/></Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/About"></Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/username"></Link>
        </div>
        &nbsp;&nbsp;&nbsp;
        <Route exact path="/" component={ListeHobbies}></Route>
        <Route path="/ui" component={TestMaterialUI}></Route>
        <Route path="/About/:id" component={About}></Route>
        <Route
          path="/username"
          component={() => <Username name="Michel" age="54" />}
        />
        &nbsp;&nbsp;&nbsp;
        <Route path="/rock" component={GroupeRock} />
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
