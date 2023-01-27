import React from 'react';
import video1 from '../../videos/videoTest.mp4'
import highlight5 from '../../images/Highlight_05.svg'
import highlight4 from '../../images/Highlight_04.svg'
import '../../style/stream.css'
import p2 from "../../images/samplePerson2.svg";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Stream = () => {
    return (
        <div>
            <div className={'highlight4 flex justify-start md:mb-[50px] lg:mb-0 mr-[100px] mt-[20px]'}>
                <LazyLoadImage src={highlight4}
                               alt={'highlight4'}
                />
                {/*<img src={highlight4} alt={'highlight4'}/>*/}
            </div>

            <div className={'stream-style xsm:block md1:flex justify-center text-white text-right -mt-[30px] ' +
                            'xsm:mt-[20px] xsm:content-center'}>

                <div className={'flex items-center lg:mt-0 mr-[50px] xsm:ml-5 justify-center'}>
                    <div>
                        <h2 className={'whitespace-nowrap md:text-[30px] mb-4 xsm:text-center xsm:text-[22px] xsm:mt-3'}>
                            مطمئن ترین راه برای نگهداری طلا شما
                        </h2>
                        <p className={'md:text-[10px] leading-7 font-thin xsm:text-[13px]'}>
                            اینجا یک متن درباره توضیحات وبسایت قرار میگیرد اینجا
                            یک متن درباره توضیحات وبسایت قرار میگیرداینجا یک متن درباره توضیحات
                            وبسایت قرار میگیرداینجا یک متن درباره توضیحات وبسایت قرار میگیرداینجا
                            یک متن درباره توضیحات وبسایت قرار میگیرداینجا یک متن درباره توضیحات
                            وبسایت قرار میگیرداینجا یک متن درباره توضیحات وبسایت قرار میگیرد
                        </p>
                    </div>
                </div>

                <div className={'highlight5 flex items-end md:mr-4 md:mb-[80px] md:-ml-[50px] xsm:hidden md1:flex'}>
                    <LazyLoadImage src={highlight5}
                                   alt={'highlight5'}
                    />
                    {/*<img src={highlight5} alt={'highlight5'}/>*/}
                </div>

                <div className={'md:p-[70px] xsm:p-5'}>
                    <video className={'w-[2000px]'} controls>
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
        </div>
    )
}
export default Stream;