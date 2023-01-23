import React from 'react';
import {BsTelephone} from 'react-icons/bs'
import {IoLocationOutline} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'
import etemad1 from '../../images/etemad1.png'
import etemad2 from '../../images/etemad2.png'

import '../../style/footer.css'

const Footer = () => {
    return (
        <div className={'bg-footerColor xsm:mt-5'}>
            <div className={'xsm:block footer-style md:flex text-white text-right lg:p-10'}>

                <div className={'md:flex hidden md:items-center'}>
                    <div>
                        <img src={etemad1} className={'w-[700px] lg:w-[900px]'} alt={'etemad1'}/>
                    </div>
                    <div>
                        <img src={etemad2} className={'w-[700px] lg:w-[900px]'} alt={'etemad2'}/>
                    </div>
                </div>

                <div className={'whitespace-nowrap xsm:mb-3 xsm:pt-5 md:flex md:items-center md:mx-5'}>
                    <div>
                        <h2 className={'text-sm mb-3 xsm:text-center'}>
                            لینک های مفید
                        </h2>
                        <div className={'text-xs md:leading-8'}>
                            <div className={'flex md:float-right xsm:justify-center'}>
                                <p>
                                    شماره تماس :021212121
                                </p>
                                <BsTelephone color={'#d0a94d'} className={'ml-2 mt-2'} size={"16px"}/>
                            </div>
                            <div className={'flex md:float-right xsm:justify-center'}>
                                <p>
                                    آدرس: تهران، پل پارک وی، خیابان ولیعصر
                                </p>
                                <IoLocationOutline color={'#d0a94d'} className={'ml-2 mt-2'} size={"18px"}/>
                            </div>
                            <div className={'flex md:float-right xsm:justify-center'}>
                                <p>
                                    milad1380@gmail.com :پست الکترونیک
                                </p>
                                <HiOutlineMail color={'#d0a94d'} className={'ml-2 mt-2'} size={"18px"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'whitespace-nowrap xsm:mb-3 xsm:pt-5 md:flex md:items-center'}>
                    <div>
                        <h2 className={'text-sm mb-3 xsm:text-center'}>
                            لینک های مفید
                        </h2>
                        <div className={'text-xs md:leading-8'}>
                            <div className={'flex md:float-right xsm:justify-center'}>
                                <p>
                                    شماره تماس :021212121
                                </p>
                                <BsTelephone color={'#d0a94d'} className={'ml-2 mt-2'} size={"16px"}/>
                            </div>
                            <div className={'flex md:float-right xsm:justify-center'}>
                                <p>
                                    آدرس: تهران، پل پارک وی، خیابان ولیعصر
                                </p>
                                <IoLocationOutline color={'#d0a94d'} className={'ml-2 mt-2'} size={"18px"}/>
                            </div>
                            <div className={'flex md:float-right xsm:justify-center'}>
                                <p>
                                    milad1380@gmail.com :پست الکترونیک
                                </p>
                                <HiOutlineMail color={'#d0a94d'} className={'ml-2 mt-2'} size={"18px"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'xsm:text-center xsm:p-5 md:flex md:items-center'}>
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
                </div>
                <div className={'flex xsm:p-3 justify-center md:hidden'}>
                    <div>
                        <img src={etemad1} className={'sm:w-[200px] w-[700px]'} alt={'etemad1'}/>
                    </div>
                    <div>
                        <img src={etemad2} className={'sm:w-[200px] w-[700px]'} alt={'etemad2'}/>
                    </div>
                </div>
            </div>

            <div className={'flex justify-center text-white text-xs p-5'}>
                است<span className={'text-mainGold mx-2'}>طلا ۲۴</span> تمامی حقوق این وبسایت، متعلق به
            </div>
        </div>
    )
}

export default Footer;