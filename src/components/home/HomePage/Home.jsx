import React, {Suspense, useState} from 'react';
import BallPulseSync from "../../Loading/BallPulseSync";
import MyComponent from 'react-fullpage-custom-loader'
import MainNavbar from "./MainNavbar";
import Slider from "./Slider";
import Cards from "./Cards";
import Stream from "./Stream";
import Footer from "./Footer";
import HomePageChart from "../chart/HomePageChart";
import Comments from "./Comments";

const Home = () => {
    const [showLoader,setShowLoader] = useState(true);
    const props = {
        sentences: ['لطفا منتظر بمانید...'],
        fadeIn:true,
        wrapperBackgroundColor: "#252525",
        textStyles: {color:"#FFC800"}
    }

    return (
        <>
                <Suspense fallback={<MyComponent {...props} customLoader={<BallPulseSync />} />}>
                    <MainNavbar/>
                    <Slider/>
                    <Cards />
                    <Stream />
                    <HomePageChart />
                    <Comments />
                    <Footer />
                </Suspense>
        </>
    )
}

export default Home;