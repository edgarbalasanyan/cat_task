import React from 'react';
import "./NavBar.css"

const categories = [
    { id: 1, name: "With hat" },
    { id: 2, name: "In universe" },
    { id: 3, name: "In action" },
    { id: 4, name: "With sunglasses" }
];

function Navbar({ handleButtonClick, activeCategoryId  }) {
    console.log(handleButtonClick, 'handleButtonClick')
    return (
        <div className="navbar">
            {categories.map(category => (
                <button
                    key={category.id}
                    onClick={() => handleButtonClick(category.id)}
                    className={`category ${category.id === activeCategoryId ? 'active' : ''}`}
                    id={category.id}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}
export default Navbar;
