import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from "./Blog";
import Home from "./Home";
import Veg from "./Veg";

import Diet from "./components/Diet";
import SignInSide from "./components/SignInSlide";
import SignUp from "./components/SignUp";
import Plan from "./Plan";
import Nonveg from "./Nonveg";


function App() {
 
  return (
  
     <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path='/veg' element={<Veg/>}></Route>
          
         <Route path='/Plan' element={<Plan/>}></Route>
         <Route path="/Diet" element={<Diet/>}></Route>
         <Route path="/Sign"  element={<SignInSide/>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/Nonveg" element={<Nonveg/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
