import React from 'react';
import MainNavbar from "./MainNavbar";
import Slider from "./Slider";
import Cards from "./Cards";
import Stream from "./Stream";
import highlight4 from "../../images/Highlight_04.svg";
import Footer from "./Footer";
<<<<<<< HEAD
import HomePageChart from "./chart/HomePageChart";
import Comments from "./Comments";

=======
import SignupOrLogin from "./Signup/SignupOrLogin";
import Login from "./Signup/Login";
import Signup from "./Signup/Signup";
import Success from "./Signup/Success";
>>>>>>> Signup

const Home = () => {
    return (
        <>
<<<<<<< HEAD
            <MainNavbar/>
            <Slider/>
            <Cards />
            <Stream />
            <HomePageChart />
            <Comments />
            <Footer />
=======
            {/*<MainNavbar/>*/}
            {/*<Cards />*/}
            {/*<Stream />*/}
            {/*<Footer />*/}

            <SignupOrLogin />
            <Login />
            <Signup />
            <Success />
>>>>>>> Signup
        </>
    )
}

export default Home;