import React from 'react';
import Header from "./Components/Header/Header";
import routes from "../src/routes";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
