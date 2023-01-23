import React from 'react';
import Navbar from "./Navbar";
import Cards from "./Cards";
import Stream from "./Stream";
import highlight4 from "../../images/Highlight_04.svg";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Navbar/>

            <Cards />
            <Stream />
            <Footer />
        </>
    )
}

export default Home;