import React, {useRef, useState} from 'react';
import "../../style/slider.css"
import image1 from "../../img/1744263.jpg"
import image2 from "../../img/bars-New-York-Assay-Office-US-Mint.webp"
import image3 from "../../img/GettyImages-1130532216.jpg"

const Slider = () => {
    const carouselContainer = useRef(null)
    const [carouselData, setCarouselData] = useState([
        {
            'id': '1',
            'src': image1,
        },
        {
            'id': '2',
            'src': image2,
        },
        {
            'id': '3',
            'src': image3,
        },
    ])
    const [carouselInView, setCarouselInView] = useState([3, 2, 1])
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-[30%]">
                    <div className={'flex items-center lg:mt-0 mr-[50px] xsm:ml-5'}>
                        <div className="mt-20">
                            <h2 className={'font-bold text-white whitespace-nowrap md:text-[30px] mb-4 xsm:text-center xsm:text-[22px] xsm:mt-3'}>
                                مطمئن ترین راه برای <span className={"text-gold"}>نگهداری طلا </span>شما
                            </h2>
                            <p className={'text-white md:text-[10px] leading-7 font-thin xsm:text-[13px]'}>
                                اینجا یک متن درباره توضیحات وبسایت قرار میگیرد اینجا
                                یک متن درباره توضیحات وبسایت قرار میگیرداینجا یک متن درباره توضیحات
                                وبسایت قرار میگیرداینجا یک متن درباره توضیحات وبسایت قرار میگیرداینجا
                                یک متن درباره توضیحات وبسایت قرار میگیرداینجا یک متن درباره توضیحات
                                وبسایت قرار میگیرداینجا یک متن درباره توضیحات وبسایت قرار میگیرد
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                    <div className="carousel-container" ref={carouselContainer}>
                        {carouselData.map((item, index) => {
                            return (
                                <div className={"slide"}>
                                    <img src={item.src}
                                         className={`carousel-item carousel-item-${carouselInView[index]}`}
                                         data-index={`${index + 1}`} loading="lazy"/>
                                </div>
                           )
                                    })}
                                </div>
                            <div className="carousel-controls">
                                <button onClick={() => {
                                    next()
                                }} className="carousel-control carousel-control-next" data-name="next"></button>
                            </div>
                        </div>
                        </div>
                        </>
                        )

                            function next() {
                                // let updateDate = [...carouselData];
                                // updateDate.push(updateDate.shift());
                                // setCarouselData(updateDate)

                                let updateCarouselInView = [...carouselInView]
                                updateCarouselInView.unshift(updateCarouselInView.pop());
                                console.log(updateCarouselInView)
                                setCarouselInView(updateCarouselInView)
                            }
                        }
                            export default Slider;