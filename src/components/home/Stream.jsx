import React from 'react';
import video1 from '../../videos/videoTest.mp4'
import highlight5 from '../../images/Highlight_05.svg'
import highlight4 from '../../images/Highlight_04.svg'
import '../../style/stream.css'

const Stream = () => {
    return (
        <div>
            <div className={'highlight4 flex justify-end md:mb-[50px] lg:mb-0 mr-[100px] mt-[20px]'}>
                <img src={highlight4} alt={'highlight4'}/>
            </div>
            <div className={'stream-style xsm:block md:flex justify-center text-white text-right -mt-[30px] ' +
                            'xsm:mt-[20px] xsm:content-center'}>
                <div className={'md:p-[70px] xsm:p-5'}>
                    <video width="2900" controls>
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={'highlight5 flex items-end md:mr-4 md:mb-[80px] md:-ml-5 xsm:hidden md:flex'}>
                    <img src={highlight5} alt={'highlight5'}/>
                </div>
                <div className={'flex items-center lg:mt-0 mr-[50px] xsm:ml-5'}>
                    <div>
                        <h2 className={'md:text-[20px] lg:text-[22px] mb-4 xsm:text-center xsm:text-[22px] xsm:mt-3'}>
                            مطمئن ترین راه برای نگهداری طلا شما
                        </h2>
                        <p className={'md:text-[11px] lg:text-[13px] leading-7 font-thin xsm:text-[13px]'}>
                            اینجا یک متن درباره توضیحات وبسایت قرار میگیرد اینجا
                            یک متن درباره توضیحات وبسایت قرار میگیرداینجا یک متن درباره توضیحات
                            وبسایت قرار میگیرداینجا یک متن درباره توضیحات وبسایت قرار میگیرداینجا
                            یک متن درباره توضیحات وبسایت قرار میگیرداینجا یک متن درباره توضیحات
                            وبسایت قرار میگیرداینجا یک متن درباره توضیحات وبسایت قرار میگیرد
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Stream;