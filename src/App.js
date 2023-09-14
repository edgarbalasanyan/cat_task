import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import CatPhotos from './components/CatPhotos/CatPhotos';
import "./App.css"

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleButtonClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

  return (
    <div className="App">
      <NavBar handleButtonClick={handleButtonClick} activeCategoryId={selectedCategory} />
      <CatPhotos selectedButtonId={selectedCategory}/>
    </div>
  );
}

export default App;

