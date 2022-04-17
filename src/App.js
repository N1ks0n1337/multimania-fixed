import React from 'react';
import './styled/null.css'
import Header from './blocks/header/Header'
import OurStory from './blocks/ourStory/OurStory';
import Collectibles from './blocks/collectibles/Collectibles';
import Works from './blocks/works/Works';
import LearnMore from './blocks/learnMore/LearnMore';
import Footer from './blocks/footer/Footer';
import Roadmap from './blocks/roadmap/Roadmap';


function App() {
  return (
    <div className="App">
      <Header/>
      <OurStory/>
      <Collectibles/>
      <Works/>
      <Roadmap/>
      <LearnMore/>
      <Footer/>
    </div>
  );
}

export default App;