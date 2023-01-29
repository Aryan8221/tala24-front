import React from 'react';
import MainNavbar from "./MainNavbar";
import Slider from "./Slider";
import Cards from "./Cards";
import Stream from "./Stream";
import highlight4 from "../../images/Highlight_04.svg";
import Footer from "./Footer";
import SignupOrLogin from "./Signup/SignupOrLogin";
import Login from "./Signup/Login";
import Signup from "./Signup/Signup";
import Success from "./Signup/Success";

const Home = () => {
    return (
        <>
            {/*<MainNavbar/>*/}
            {/*<Cards />*/}
            {/*<Stream />*/}
            {/*<Footer />*/}

            <SignupOrLogin />
            <Login />
            <Signup />
            <Success />
        </>
    )
}

export default Home;