import React from 'react';
import Header from './components/header/header.js';
import Navigation from './components/navigation/navigation.js';
import Dashboard from './components/dashboard/dashboard.js';
import logo from './logo.svg';
import './css/style.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
