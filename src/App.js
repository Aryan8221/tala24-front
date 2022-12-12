import React, {Component} from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./components/home/Home";
import "./style/App.css";
import "./style/reset.css";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={(<Home/>)}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
