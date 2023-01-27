import React from 'react';
import {BsTelephone} from 'react-icons/bs'
import {IoLocationOutline} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'
import { LazyLoadImage } from "react-lazy-load-image-component";
import etemad1 from '../../images/etemad1.png'
import etemad2 from '../../images/etemad2.png'

import '../../style/footer.css'

const Footer = () => {
    return (
        <div className={'bg-footerColor xsm:mt-5'}>

            <div className={'xsm:block footer-style md:flex text-white text-right md:p-10'}>

                <div className={'xsm:p-5 md:flex md:items-center text-right'}>
                    <div>
                        <h2 className={'text-sm mb-3'}>
                            درباره ما
                        </h2>
                        <p className={'text-xs leading-5'}>
                            این یک پیام تستی است
                            این یک پیام تستی استاین یک پیام تستی استاین یک
                            پیام تستی استاین یک پیام تستی استاین یک پیام تستی
                            استاین یک پیام تستی استاین یک پیام تستی استاین
                            یک پیام تستی استاین یک پیام تستی استاین یک پیام
                            تستی استاین یک پیام تستی استاین یک پیام تستی است
                        </p>
                    </div>
                    <div className={'f1 mt-4'}></div>
                </div>

                <div className={'whitespace-nowrap xsm:mb-3 md:flex md:items-center md:mx-5 xsm:mx-3'}>
                    <div>
                        <h2 className={'text-sm md:mb-3 xsm:mb-5'}>
                            ارتباط با ما
                        </h2>
                        <div className={'text-xs md:leading-8'}>
                            <div className={'flex md:float-right'}>
                                <BsTelephone color={'#d0a94d'} className={'md:ml-2 md:mt-2 xsm:-mt-1 xsm:mb-3 xsm:ml-2'} size={"16px"}/>
                                <p>
                                    شماره تماس :021212121
                                </p>
                            </div>
                            <div className={'flex md:float-right'}>
                                <IoLocationOutline color={'#d0a94d'} className={'md:ml-2 md:mt-2 xsm:mb-3 xsm:ml-2'} size={"18px"}/>
                                <p>
                                    آدرس: تهران، پل پارک وی، خیابان ولیعصر
                                </p>
                            </div>
                            <div className={'flex md:float-right'}>
                                <HiOutlineMail color={'#d0a94d'} className={'md:ml-2 md:mt-2 xsm:mb-3 xsm:ml-2'} size={"18px"}/>
                                <p>
                                    milad1380@gmail.com :پست الکترونیک
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'f1 mt-4'}></div>
                </div>

                <div className={'whitespace-nowrap xsm:pt-3 md:flex md:items-center xsm:mx-3'}>
                    <div>
                        <h2 className={'text-sm mb-3'}>
                            لینک های مفید
                        </h2>
                        <div className={'text-xs md:leading-8 xsm:leading-8'}>
                            <div className={'flex'}>
                                <p>
                                    خدمات
                                </p>
                                {/*<BsTelephone color={'#d0a94d'} className={'ml-2 mt-2'} size={"16px"}/>*/}
                            </div>
                            <div className={'flex'}>
                                <p>
                                    خدمات
                                </p>
                                {/*<IoLocationOutline color={'#d0a94d'} className={'ml-2 mt-2'} size={"18px"}/>*/}
                            </div>
                            <div className={'flex'}>
                                <p>
                                    خدمات
                                </p>
                                {/*<HiOutlineMail color={'#d0a94d'} className={'ml-2 mt-2'} size={"18px"}/>*/}
                            </div>
                            <div className={'flex'}>
                                <p>
                                    خدمات
                                </p>
                                {/*<HiOutlineMail color={'#d0a94d'} className={'ml-2 mt-2'} size={"18px"}/>*/}
                            </div>
                            <div className={'flex'}>
                                <p>
                                    خدمات
                                </p>
                                {/*<HiOutlineMail color={'#d0a94d'} className={'ml-2 mt-2'} size={"18px"}/>*/}
                            </div>
                        </div>
                    </div>
                    <div className={'f1 mt-4'}></div>
                </div>

                <div className={'flex xsm:p-3 justify-center md:items-center'}>
                    <div>
                        <LazyLoadImage src={etemad1}
                                       className={'xsm:w-[130px] sm:w-[150px] md:w-[600px] lg:w-[400px]'}
                                       alt={'etemad1'}
                        />
                        {/*<img src={etemad1} className={'xsm:w-[150px] sm:w-[175px] md:w-[600px] lg:w-[400px]'} alt={'etemad1'}/>*/}
                    </div>
                    <div>
                        <LazyLoadImage src={etemad2}
                                       className={'xsm:w-[130px] sm:w-[150px] md:w-[600px] lg:w-[400px]'}
                                       alt={'etemad2'}
                        />

                        {/*<img src={etemad2} className={'xsm:w-[150px] sm:w-[175px] md:w-[600px] lg:w-[400px]'} alt={'etemad2'}/>*/}
                    </div>
                </div>

            </div>


            <div className={'flex justify-center text-white text-xs p-5'}>
                تمامی حقوق این وبسایت، متعلق به <span className={'text-mainGold mx-2'}>طلا ۲۴</span> است
            </div>

        </div>
    )
}

export default Footer;