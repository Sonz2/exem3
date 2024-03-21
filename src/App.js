import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Insert from "./page/Insert";
import Edit from "./page/Edit"; // Import Edit component

function App() {
    const [insertSuccess, setInsertSuccess] = useState(false);

    const handleInsertSuccess = () => {
        setInsertSuccess(true);
    };

    return (
        <div className='app'>
            <Routes>
                <Route path="/" element={<div className="container">
                    <div className="insert-container">
                        <Insert onInsertSuccess={handleInsertSuccess} />
                    </div>
                    <div className="home-container">
                        <Home />
                    </div>
                </div>} />
                <Route path="/edit/:ids" element={<Edit />} /> {/* Define route for Edit page */}
            </Routes>
        </div>
    );
}

export default App;
