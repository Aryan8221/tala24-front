import React, {Component} from "react";
import { Slide } from "react-slideshow-image";
import "../../style/slider.css";

import image1 from  "../../img/1744263.jpg"
import image2 from  "../../img/bars-New-York-Assay-Office-US-Mint.webp"
import image3 from  "../../img/GettyImages-1130532216.jpg"

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
};

class SlideShow extends Component{

    state = {
        image1 : image1,
        image2 : image2,
        image3 : image3,
    }

    render() {
        return (
            <>
                <div className="slide-container">
                    <Slide >
                        <div className="each-slide">
                            <div style={{ backgroundImage: `url('${this.state.image1}')`,height:"30vh"}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ backgroundImage: `url('${this.state.image2}')`,height:"30vh"}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ backgroundImage: `url('${this.state.image3}')`,height:"30vh"}}>
                            </div>
                        </div>
                    </Slide>
                </div>
            </>
        );
    }
}

export default SlideShow;