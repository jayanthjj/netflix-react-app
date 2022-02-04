import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action, originals, romance, horror, documentaries, comedy } from './Constants/constants.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action' isSmall url={action} />
      <RowPost title='Comedy' isSmall url={comedy} />
      <RowPost title='horror' isSmall url={horror} />
      <RowPost title='Documentaries' isSmall url={documentaries} />
    </div>
  );
}

export default App;
