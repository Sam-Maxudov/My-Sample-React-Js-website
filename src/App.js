import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import DiscoverUs from './components/DiscoverUs';
import TastefulRecipes from './components/TastefulRecipes';
import DiscoverMenu from './components/DiscoverMenu';
import PerfectBlend from './components/PerfectBlend';
import CulinaryBlend from './components/CulinaryDelight';
import Footer from './components/Footer';

function App() {
  
  return (
    <div>
      <NavBar />
      <Hero />
      <DiscoverUs />
      <TastefulRecipes />
      <DiscoverMenu />
      <PerfectBlend />
      <CulinaryBlend />
      <Footer />
    </div>
  );
}

export default App;
