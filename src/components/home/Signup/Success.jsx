import logo from '../../../images/lastLogo.png'
import '../../../style/signupOrLogin.css'
import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import signup from "../../../contexts/signup";

const Success = () => {

    const info = useContext(signup)

    const navigate = useNavigate()

    useEffect(() => {
        if (info.successAllowed === false) {
            navigate("/")
        }
    }, [])

    return (
        <>
            <div className={'flex justify-center items-center h-screen'}>
                <div className={'container w-[300px] h-[350px] bg-[#1b1b1b] shadow-lg'}>
                    <div className={'flex justify-center'}>
                        <img src={logo} alt={'logo'} className={'w-[90px] mt-[30px]'}/>
                    </div>
                    <p className={'text text-center text-white mt-4 pb-4 mx-4'}>
                        مطمئن ترین راه برای نگهداری <span className={'text-mainGold'}>طلا</span> شما
                    </p>

                    <p className={'text-[20px] text-white mt-[30px] text-center'}>
                        به<span className={'text-mainGold'}> طلا ۲۴ </span> خوش آمدید
                    </p>

                    <div className={'mx-4 mt-5'}>
                        <Link to="/"  className={'flex justify-center items-center bg-mainGold w-full rounded h-[45px]'}>
                            <span className={'text-black'}>
                                بازگشت به صفحه اصلی
                            </span>
                        </Link>
                    </div>

                    <div className={'mx-4 mt-5'}>
                        <Link to="/" className={'flex justify-center items-center bg-[#212121] w-full rounded h-[45px]'}>
                            <span className={'text-white'}>
                                تکمیل مشخصات
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Success;