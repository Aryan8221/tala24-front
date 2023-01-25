import React from 'react';
import MainNavbar from "./MainNavbar";
import Slider from "./Slider";
import Cards from "./Cards";
import Stream from "./Stream";
import highlight4 from "../../images/Highlight_04.svg";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <MainNavbar/>
            <Cards />
            <Stream />
            <Footer />
        </>
    )
}

export default Home;