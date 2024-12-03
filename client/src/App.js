import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import React from "react";
import PostDetails from "./components/PostDetails";
import "./App.css";

const API_URL = 'http://34.28.253.47:8000';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home API_URL={API_URL}/>} />
                <Route path="/new" element={<NewPost API_URL={API_URL}/>} />
                <Route path="/posts/:id" element={<PostDetails API_URL={API_URL}/>} />
            </Routes>
        </Router>
    );
};

export default App;