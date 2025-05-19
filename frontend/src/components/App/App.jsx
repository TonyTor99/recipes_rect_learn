import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "../Home/Home";
import Recipe from "../Recipe/Recipe";
import Category from "../Category/Category";
import Navbar from "../Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category/:slug" element={<Category/>}/>
                <Route path="/recipe/:id" element={<Recipe/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;