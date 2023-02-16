import React, {Component} from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./components/home/Home";
import "./style/App.css";
import "./style/reset.css";
import SignupOrLogin from "./components/home/Signup/SignupOrLogin";
import Success from "./components/home/Signup/Success";
import Dashboard from "./components/home/dashboard/Dashboard";
import Signup from "./components/home/Signup/Signup";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={(<Home/>)}/>
                    <Route path="/login" element={(<SignupOrLogin/>)}/>
                    <Route path="/OTP-code" element={(<Signup/>)}/>
                    <Route path="/welcome" element={(<Success/>)}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
