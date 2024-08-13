import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import axios from "axios";

const Home = () => {
  const [recipesData, setRecipesData] = useState([]); 
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/Recipe-Diet"
        );
        console.log(response.data);
        setRecipesData(response.data); 
        setRecipes(response.data); 
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

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
      <Header setSearchTerm={setSearchTerm} setCategory={setCategory} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Home;
