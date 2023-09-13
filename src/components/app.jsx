import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import NavLinks from './components/NavLinks';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProblemasAmbientales from './componenets/ProblemasAmbientales';
import Donaciones from './pages/Donaciones';

function App() {
  return (
    <Router>
      <Header />
      <NavLinks />
      <Route path="/" exact component={Home} />
      <Route path="/contaminacion" component={Contaminacion} />
      <Route path="/donaciones" component={Donaciones} />
      <Footer />
    </Router>
  );
}

export default App;
