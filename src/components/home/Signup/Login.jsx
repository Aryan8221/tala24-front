import logo from '../../../images/lastLogo.png'
import '../../../style/signupOrLogin.css'

const Login = () => {
    return (
        <>
            <div className={'flex justify-center items-center h-screen bg-[#000] '}>
                <div className={'container w-[300px] h-[350px] bg-[#1D1C1C]'}>
                    <div className={'flex justify-center'}>
                        <img src={logo} alt={'logo'} className={'w-[90px] mt-[30px]'}/>
                    </div>
                    <p className={'text text-center text-white mt-4 pb-4 mx-4'}>
                        مطمئن ترین راه برای نگهداری <span className={'text-mainGold'}>طلا</span> شما
                    </p>
                    <p className={'text-[9px] mx-4 text-white mt-3'}>
                        رمز عبور را وارد کنید
                    </p>

                    <div className={'flex justify-center mx-4 mt-4'}>
                        <input
                            type={"password"}
                            className={'field bg-[#212121] w-full rounded h-[45px] p-4 text-white'}
                        />
                    </div>

                    <button className={'text-white text-[9px] mx-4'}>
                        <small>
                            دریافت رمز یکبار مصرف
                        </small>
                    </button>

                    <div className={'mx-4 mt-5'}>
                        <button className={'flex justify-center items-center bg-mainGold w-full rounded h-[45px]'}>
                            <span className={'text-black'}>
                                تایید
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;