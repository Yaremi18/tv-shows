import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import SideMenu from './components/molecules/SideMenu';

function App() {
  return (
    <Router>
      <SideMenu />
      <Routes />
    </Router>
  );
};

export default App;
