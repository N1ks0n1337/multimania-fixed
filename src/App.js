import React from 'react';
import './styled/null.css'
import Header from './blocks/header/Header'
import OurStory from './blocks/ourStory/OurStory';
import Collectibles from './blocks/collectibles/Collectibles';
import LearnMore from './blocks/learnMore/LearnMore';
import Footer from './blocks/footer/Footer';
import Roadmap from './blocks/roadmap/Roadmap';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header/>
      <OurStory/>
      <Collectibles/>
      <Roadmap/>
      <LearnMore/>
      <Footer/>
    </div>
  );
}

export default App;