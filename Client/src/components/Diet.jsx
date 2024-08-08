import React, { useState } from 'react';
import './Recipe.css';
import './rec.css';
import { useNavigate } from 'react-router-dom';

const Diet = () => {
    const navigate = useNavigate();
    const [selectedDiet, setSelectedDiet] = useState('Anything');
  const [calories, setCalories] = useState('');
  const [mealsPerDay, setMealsPerDay] = useState(3);
  const [mealPlan, setMealPlan] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const dietOptions = ['Anything', 'Paleo', 'Vegetarian', 'Vegan', 'Ketogenic', 'Mediterranean'];

  
  const allRecipes = [
    {
      name: 'Oatmeal with Berries',
      diet: 'Vegan',
      calories: 350,
      image: 'https://raw.githubusercontent.com/Msuganya18/images/main/oatmeal.jpeg',
      recipe: '1. Cook oats. 2. Top with berries and a drizzle of honey.',
    },
    {
      name: 'Grilled Chicken Salad',
      diet: 'Paleo',
      calories: 400,
      image: 'https://raw.githubusercontent.com/Msuganya18/images/main/salad.jpeg',
      recipe: '1. Grill chicken. 2. Toss with mixed greens, cherry tomatoes, and vinaigrette.',
    },
    {
      name: 'Spicy Vegetable Salad',
      diet: 'Paleo',
      calories: 200,
      image: 'https://raw.githubusercontent.com/Msuganya18/images/main/vege%20salad.jpg',
      recipe: '1. Vegetables as your choice 2. Toss with  olive oil , mixed greens, cherry tomatoes, and vinaigrette.',
    },
    {
      name: 'Hottest Matcha Soup',
      diet: 'Paleo',
      calories: 150,
      image: 'https://raw.githubusercontent.com/Msuganya18/images/main/matcha.jpg',
      recipe: '1. Take some Matcha Powder and Soak it in water OverNight 2. Toss with  Apple or some other Fruits or mixed greens, cherry tomatoes, and vinaigrette.',
    },
    {
      name: 'Sweet Potato Salad',
      diet: 'Paleo',
      calories: 150,
      image: 'https://raw.githubusercontent.com/Msuganya18/images/main/sweet.jpg',
      recipe: '1. Take 2 SweetPotato and whistle it about 4 times  2. Toss with  Apple or some other Fruits and add little salt and pepper.',
    },
    {
      name: 'Tuna With Veggies',
      diet: 'paleo',
      calories: 200,
      image: 'https://raw.githubusercontent.com/Msuganya18/images/main/tuna.jpeg',
      recipe: '1. Take a piece of tuna and rinse it very well 2. After boiling add little salt and pepper with some greens.',
    },
  ];


  


  const handleDietChange = (diet) => {
    setSelectedDiet(diet);
  };

  const handleCalorieChange = (event) => {
    setCalories(event.target.value);
  };

  const handleMealsPerDayChange = (event) => {
    setMealsPerDay(event.target.value);
  };

  const generateMealPlan = () => {
    const filteredRecipes = allRecipes.filter(
      recipe => selectedDiet === 'Anything' || recipe.diet === selectedDiet
    );

    const selectedMeals = [];
    for (let i = 0; i < mealsPerDay; i++) {
      const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
      selectedMeals.push(filteredRecipes[randomIndex]);
    }

    setMealPlan(selectedMeals);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipe(true);
  };

  const closeRecipeModal = () => {
    setShowRecipe(false);
    setSelectedRecipe(null);
  };
  return (
    <div >
      <main>
        <section class="heroo">
            <div class="heroo-content">
            <h1>PUT YOUR DIET ON AUTOPILOT</h1>
            <p>Ready to give it a shot? Let us know your diet.</p>
            </div>
            <div class="heroo-images">
               

           
            </div>
        </section>
    </main>
      
      
      <div className="diet-selector">
        {dietOptions.map((diet) => (
          <button
            key={diet}
            className={selectedDiet === diet ? 'selected' : ''}
            onClick={() => handleDietChange(diet)}
          >
            {diet}
          </button>
        ))}
      </div>
     <div className='sugan'>

      <div className="calorie-input">
        <label className='label-diet'>
         I want to eat 

          <input
          className='number'
          type="number"
          placeholder="...."
          value={calories}
          onChange={handleCalorieChange}
          />
        </label>
        <label className='label-diet'>
          Calories in 
          <select value={mealsPerDay} onChange={handleMealsPerDayChange} className='me'>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} meals
              </option>
            ))}
          </select>
        </label>
      </div>
     

      <button onClick={generateMealPlan} className="generate-button">
        Generate
      </button>
     
      {mealPlan.length > 0 && (
        <div className="meal-plan">
          <h2 className='meal-plan-h1'> Your Meal Plan </h2>
          <ul>
            {mealPlan.map((meal, index) => (
              <li key={index} className="meal-item">
                <img src={meal.image} alt={meal.name} className="meal-image" />
                <div className="meal-details">
                  <h3>{meal.name}</h3>
                  <p>{meal.calories} Calories</p>
                  <button onClick={() => handleRecipeClick(meal)} className="reci-button">
                    Recipe
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showRecipe && selectedRecipe && (
        <div className="modal" onClick={closeRecipeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeRecipeModal}>&times;</span>
            <h2>{selectedRecipe.name}</h2>
           
            <p>{selectedRecipe.recipe}</p>
          </div>
        </div>
      )}
      </div>
      </div>


  )
}

export default Diet