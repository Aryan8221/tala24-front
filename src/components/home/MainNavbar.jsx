import React from 'react';
import logo from "../../images/lastLogo.png"
import { useState, useEffect } from "react";
import {RxEnter} from "react-icons/rx"
import "../../style/home.css"
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const MainNavbar = () => {

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <div className="mb-7">
            <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900" style={{backgroundColor:"transparent"}}>
                <div className="container  flex flex-1 flex-wrap justify-between">
                    <div className="flex flex-wrap items-center justify-start mx-auto">
                        <button data-collapse-toggle="navbar-default" type="button"
                                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <a href="#" className="flex items-center">
                            <img src={logo} className="h-6 mr-3 sm:h-9"
                                 alt="Tala24"/>
                        </a>

                        <div className="hidden mr-8 w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" style={{backgroundColor:"transparent"}}>
                                <li>
                                    <a href="#"
                                       className="block ml-7 py-2 pl-3 pr-4 text-white hover:text-gold rounded  md:active:text-gold md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">خانه</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pl-3 pr-4 text-white rounded hover:text-gold md:hover:bg-transparent md:hover:text-gold md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">خدمات</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pl-3 pr-4 text-white  rounded hover:text-gold md:hover:bg-transparent md:hover:text-gold md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">درباره ما</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pl-3 pr-4 text-white rounded hover:text-gold md:hover:bg-transparent md:hover:text-gold md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">تماس با ما</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pl-3 pr-4 text-white rounded hover:text-gold md:hover:bg-transparent md:hover:text-gold md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> ورود به سامانه</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-wrap items-center justify-end mx-auto">
                        <button className="flex items-center bg-transparent text-sm hover:bg-gold text-white  hover:text-bgGray py-2 px-4 border border-gold hover:border-transparent rounded">
                            <RxEnter fontSize="15px" className="transform rotate-180"/>
                            <spna className="mr-2" >ورود | ثبت نام</spna>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MainNavbar;