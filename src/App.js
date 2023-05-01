import React from 'react';
import './App.css';
import Header from './componentes/Header'
import Body from './componentes/Section/Body'
import Search from './api/Search';


function App() {
  return (
    <div>
      <Header />
      <Search />
      <Body />
    </div>
  );
}

export default App;
