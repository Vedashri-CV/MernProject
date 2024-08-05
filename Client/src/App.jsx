import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";

const recipesData = [
  // North Indian Recipes
  {
    id: 1,
    name: "Butter Chicken",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 2,
    name: "Paneer Tikka",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 3,
    name: "Chole Bhature",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 4,
    name: "Rogan Josh",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 5,
    name: "Aloo Paratha",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 6,
    name: "Dal Makhani",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 7,
    name: "Tandoori Chicken",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 8,
    name: "Palak Paneer",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 9,
    name: "Rajma Chawal",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 10,
    name: "Kofta",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 11,
    name: "Bhindi Masala",
    category: "North Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  // South Indian Recipes
  {
    id: 12,
    name: "Masala Dosa",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 13,
    name: "Sambar",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 14,
    name: "Rasam",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 15,
    name: "Idli",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 16,
    name: "Vada",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 17,
    name: "Pongal",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 18,
    name: "Upma",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 19,
    name: "Bisi Bele Bath",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 20,
    name: "Avial",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 21,
    name: "Puttu",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 22,
    name: "Chettinad Chicken",
    category: "South Indian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  // Chinese Recipes
  {
    id: 23,
    name: "Sweet and Sour Pork",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 24,
    name: "Kung Pao Chicken",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 25,
    name: "Spring Rolls",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 26,
    name: "Dumplings",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 27,
    name: "Ma Po Tofu",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 28,
    name: "Peking Duck",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 29,
    name: "Chow Mein",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 30,
    name: "Wonton Soup",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 31,
    name: "Fried Rice",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 32,
    name: "Hot and Sour Soup",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 33,
    name: "Szechuan Chicken",
    category: "Chinese",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  // Italian Recipes
  {
    id: 34,
    name: "Spaghetti Carbonara",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 35,
    name: "Margherita Pizza",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 36,
    name: "Lasagna",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 37,
    name: "Risotto",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 38,
    name: "Tiramisu",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 39,
    name: "Pesto Pasta",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 40,
    name: "Focaccia",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 41,
    name: "Bruschetta",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 42,
    name: "Minestrone",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 43,
    name: "Ravioli",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 44,
    name: "Gelato",
    category: "Italian",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
];

function App() {
  const [recipes, setRecipes] = useState(recipesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    let filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (category !== "All") {
      filtered = filtered.filter((recipe) => recipe.category === category);
    }
    setFilteredRecipes(filtered);
  }, [searchTerm, category, recipes]);

  return (
    <div className="App">
      {" "}
      hello
      <Header setSearchTerm={setSearchTerm} setCategory={setCategory} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default App;
