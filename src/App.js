import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./app.css"
import "./responsive.css"

import HomePage from "./components/pages/HomePage"
import Auth from "./components/pages/auth";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/auth" Component={Auth} />
            </Routes>
        </Router>
    )
}

export default App;
