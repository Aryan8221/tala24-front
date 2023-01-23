import React from 'react';
import {GiGoldBar} from "react-icons/gi";
import '../../style/cards.css'
import image1 from '../../images/image1.svg'
import image2 from '../../images/Frame 10.svg'
import image3 from '../../images/image3.svg'

const Cards = () => {
    return (
        <div className={'cards-style flex md:justify-between text-white p-5 flex-col md:flex-row text-center'}>
            <div className={'card3 flex text-[13px] md:text-[13px] lg:text-[15px] p-2 mb-4 xsm:pb-[30px]'}>
                <div>
                    <h5 className={'lg:text-[16px] md:text-[16px] text-[16px] pb-5'}>
                        سرمایه گذاری با کمترین مبلغ
                    </h5>
                    <p className={'text1 text-right lg:text-[14px] md:text-[14px] text-[14px]'}>
                        این یک پیام مربوط به عنوان است این یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان است
                    </p>
                </div>
                <div className={'justify-center flex ml-5 mr-4'}>
                    <img className={'image'} src={image3} alt={'image3'} />
                </div>
            </div>

            <div className={'card2 flex text-[13px] md:text-[13px] lg:text-[15px] p-2 mb-4 xsm:pb-[30px]'}>
                <div>
                    <h5 className={'lg:text-[16px] md:text-[16px] text-[16px] pb-5'}>
                        سرمایه گذاری با کمترین مبلغ
                    </h5>
                    <p className={'text1 text-right lg:text-[14px] md:text-[14px] text-[14px]'}>
                        این یک پیام مربوط به عنوان است این یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان است
                    </p>
                </div>
                <div className={'justify-center flex ml-5 mr-4'}>
                    <img className={'image'} src={image2} alt={'image2'} />
                </div>
            </div>

            <div className={'card1 flex text-[16px] md:text-[13px] lg:text-[15px] p-2 mb-4'}>
                <div>
                    <h5 className={'lg:text-[16px] md:text-[16px] text-[16px] pb-5'}>
                        سرمایه گذاری با کمترین مبلغ
                    </h5>
                    <p className={'text1 text-right lg:text-[14px] md:text-[14px] text-[14px]'}>
                        این یک پیام مربوط به عنوان است این یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان استاین یک پیام مربوط به عنوان است
                    </p>
                </div>
                <div className={'justify-center flex ml-5 mr-4'}>
                    <img className={'image'} src={image1} alt={'image1'} />
                </div>
            </div>
        </div>
    )
}

export default Cards;