import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import React from "react";
import PostDetails from "./components/PostDetails";
import "./App.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<NewPost />} />
                <Route path="/posts/:id" element={<PostDetails />} />
            </Routes>
        </Router>
    );
};

export default App;