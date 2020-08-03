import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AppHeader from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <section className="content">
         <Home></Home>
      </section>
    </div>
  );
}

export default App;
