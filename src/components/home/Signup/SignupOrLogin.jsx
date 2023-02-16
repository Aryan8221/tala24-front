import logo from '../../../images/lastLogo.png'
import '../../../style/signupOrLogin.css'
import {Link} from "react-router-dom";

const SignupOrLogin = () => {
    return (
        <>
            <div className={'flex justify-center items-center h-screen '}>
                <div className={'container w-[300px] h-[350px] bg-[#1b1b1b]'}>
                    <div className={'flex justify-center'}>
                        <img src={logo} alt={'logo'} className={'w-[90px] mt-[30px]'}/>
                    </div>
                    <p className={'text text-center text-white mt-4 pb-4 mx-4'}>
                        مطمئن ترین راه برای نگهداری <span className={'text-mainGold'}>طلا</span> شما
                    </p>
                    <p className={'text-white mx-4 mt-3 text-[13px]'}>
                        ورود | ثبت نام
                    </p>
                    <p className={'text-[9px] mx-4 text-[#6D6D6D] mt-3'}>
                        لطفا شماره موبایل یا ایمیل خود را وارد کنید
                    </p>
                    <div className={'flex justify-center m-4'}>
                        <input
                            type={"text"}
                            className={'field bg-[#212121] w-full rounded h-[45px] p-4 text-white'}
                        />
                    </div>
                    <div className={'mx-4 mt-5'}>
                        <Link to="/OTP-code" className={'flex justify-center items-center bg-mainGold w-full rounded h-[45px]'}>
                            <span className={'text-black'}>
                                ورود
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupOrLogin;