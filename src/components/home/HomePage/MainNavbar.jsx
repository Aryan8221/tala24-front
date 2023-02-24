import React from 'react';
import logo from "../../../images/lastLogo.png"
import { useState, useEffect } from "react";
import {RxEnter} from "react-icons/rx"
import "../../../style/home.css"
import {Link, NavLink} from "react-router-dom"

import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import Sidebar from "./Sidebar";

const MainNavbar = () => {

    const [isOpenNav, setIsOpenNav] = useState(false);

    useEffect(() => {
    }, []);

    function toggleNavbar(){
        if(isOpenNav){
            setIsOpenNav(false);
        }else{
            setIsOpenNav(true);
        }
    }
    return (
        <div className="mb-7">
            <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900" style={{backgroundColor:"transparent"}}>
                <div className="container  flex flex-1 flex-wrap justify-between">
                    <div className="flex flex-wrap items-center justify-start mx-auto">
                        <button onClick={()=>{toggleNavbar()}} data-collapse-toggle="navbar-default" type="button"
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
                            <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent" style={{backgroundColor:"transparent"}}>
                                <li>
                                    <NavLink to="/" activeClassName="active"
                                       className="block ml-7 py-2 pl-3 pr-4 text-white hover:text-gold font-light">خانه</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services" activeClassName="active"
                                       className="block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:p-0 hover:text-gold font-light ">خدمات</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about-us" activeClassName="active"
                                       className="block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:p-0 hover:text-gold font-light ">درباره ما</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact-us" activeClassName="active"
                                       className="block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:p-0 hover:text-gold font-light ">تماس با ما</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" activeClassName="active"
                                       className="block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:p-0 hover:text-gold font-light "> ورود به سامانه</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-wrap items-center justify-end mx-auto">
                        <button className="flex items-center bg-transparent text-sm hover:bg-gold text-white  hover:text-bgGray py-2 px-4 border border-gold hover:border-transparent rounded">
                            <RxEnter fontSize="15px" className="transform rotate-180"/>
                            <Link to="/login"><spna className="mr-2" >ورود | ثبت نام</spna></Link>
                        </button>
                    </div>
                </div>
            </nav>
            {isOpenNav && (
                <Sidebar isOpenNav={isOpenNav} toggleNavbar={()=>toggleNavbar()}/>
            )}
        </div>
    )
}

export default MainNavbar;