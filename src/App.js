// import logo from './logo.svg';
import "./App.css";
import React from "react";
import HomeContainer from "./containers/HomeContainer.js";
import HeaderContainer from "./containers/HeaderContainer.js";
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
