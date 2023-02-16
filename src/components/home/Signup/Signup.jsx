import logo from '../../../images/lastLogo.png'
import '../../../style/signupOrLogin.css'
import {useState} from "react";
import Countdown from "react-countdown";
import {Link} from "react-router-dom";

const Signup = () => {
    const [mobileNumber, setMobileNumber] = useState('۰۹۱۲۳۴۵۶۷۸۹');
    const [timer, setTimer] = useState('');


    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return (
                <button >
                    ارسال مجدد کد
                </button>
            );
        } else {
            // Render a countdown
            return <span>{minutes}:{seconds} مانده تا دریافت مجدد کد</span>;
        }
    };

    return (
        <>
            <div className={'flex justify-center items-center h-screen'}>
                <div className={'container w-[300px] h-[390px] bg-[#1b1b1b]'}>
                    <div className={'flex justify-center'}>
                        <img src={logo} alt={'logo'} className={'w-[90px] mt-[30px]'}/>
                    </div>

                    <p className={'text text-center text-white mt-4 pb-4 mx-4'}>
                        مطمئن ترین راه برای نگهداری <span className={'text-mainGold'}>طلا</span> شما
                    </p>

                    <p className={'text-[9px] mx-4 text-white mt-3'}>
                        کد تایید را وارد کنید
                    </p>

                    <p className={'text-[9px] mx-4 text-[#6D6D6D] mt-3'}>
                        حساب کاربری با شماره موبایل {mobileNumber} وجود ندارد. برای ساخت حساب جدید کد تایید برای این شماره ارسال گردید.
                    </p>

                    <div className={'flex justify-center mx-4 mt-4'}>
                        <input
                            type={"password"}
                            className={'field bg-[#212121] w-full rounded h-[45px] p-4 text-white'}
                        />
                    </div>

                    <p className={'text-[9px] mx-4 text-[#6D6D6D] mt-3 text-center'}>

                        <Countdown
                            date={Date.now() + 120000}
                            renderer={renderer}
                        />

                    </p>
                    
                    <div className={'mx-4 mt-5'}>
                        <Link to="/welcome" className={'flex justify-center items-center bg-mainGold w-full rounded h-[45px]'}>
                            <span className={'text-black'}>
                                ادامه
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;