import React from 'react';
import {GiGoldBar} from "react-icons/gi";
import '../../style/cards.css'
import image1 from '../../images/image1.svg'
import image2 from '../../images/Frame 10.svg'
import image3 from '../../images/image3.svg'
import p2 from "../../images/samplePerson2.svg";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Cards = () => {
    return (
        <div className={'cards-style flex text-white p-5 flex-col md:flex-row text-center md1:text-right w-full'}>
            <div className={'card1 md1:flex text-[13px] lg:text-[15px] p-2 mb-4 xsm:pb-[30px] md:w-1/3 md:mr-4'}>
                <div className={'justify-center flex ml-5 mr-4'}>
                    <LazyLoadImage src={image3}
                                   className={'image md1:w-[150px] w-[60px] md1:m-0 mb-3'}
                                   alt={'image3'}
                    />
                    {/*<img className={'image md1:w-[150px] w-[60px] md1:m-0 mb-3'} src={image3} alt={'image3'}/>*/}
                </div>
                <div>
                    <h5 className={'text-[20px] pb-5'}>
                        سرمایه گذاری با کمترین مبلغ
                    </h5>
                    <p className={'text1 md1:text-right text-[10px]'}>
                        این یک پیام مربوط به عنوان است این یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان است
                    </p>
                </div>
            </div>

            <div className={'card2 md1:flex text-[13px] lg:text-[15px] p-2 mb-4 xsm:pb-[30px] md:w-1/3 md:mx-4'}>
                <div className={'justify-center flex ml-5 mr-4'}>
                    <LazyLoadImage src={image3}
                                   className={'image md1:w-[150px] w-[60px] md1:m-0 mb-3'}
                                   alt={'image3'}
                    />
                    {/*<img className={'image md1:w-[150px] w-[60px] md1:m-0 mb-3'} src={image3} alt={'image3'} />*/}
                </div>
                <div>
                    <h5 className={'text-[20px] pb-5'}>
                        سرمایه گذاری با کمترین مبلغ
                    </h5>
                    <p className={'text1 md1:text-right text-[10px]'}>
                        این یک پیام مربوط به عنوان است این یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان است
                    </p>
                </div>
            </div>

            <div className={'card3 md1:flex text-[13px] md:text-[13px] lg:text-[15px] p-2 mb-4 xsm:pb-[30px] md:w-1/3 md:ml-4'}>
                <div className={'justify-center flex ml-5 mr-4'}>
                    <LazyLoadImage src={image3}
                                   className={'image md1:w-[150px] w-[60px] md1:m-0 mb-3'}
                                   alt={'image3'}
                    />
                    {/*<img className={'image md1:w-[150px] w-[60px] md1:m-0 mb-3'} src={image3} alt={'image3'} />*/}
                </div>
                <div>
                    <h5 className={'text-[20px] pb-5'}>
                        سرمایه گذاری با کمترین مبلغ
                    </h5>
                    <p className={'text1 md1:text-right text-[10px]'}>
                        این یک پیام مربوط به عنوان است این یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان است
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards;