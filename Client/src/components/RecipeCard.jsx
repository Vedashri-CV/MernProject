import React, { useState } from "react";


function RecipeCard({ recipe }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <p>{recipe.category}</p>
      <button onClick={togglePopup}>View Recipe</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <h3>{recipe.name}</h3>
            <p>Recipe steps:</p>
            <ul>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
