import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import CatPhotos from './components/CatPhotos/CatPhotos';
import "./App.css"

function App() {
  const [selectedButtonId, setSelectedButtonId] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButtonId(buttonId);
  };

  return (
    <div className="App">
      <NavBar handleButtonClick={handleButtonClick} />
      <CatPhotos selectedButtonId={selectedButtonId}/>
    </div>
  );
}

export default App;

