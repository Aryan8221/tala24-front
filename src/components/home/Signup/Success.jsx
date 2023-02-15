import logo from "../../../images/logo.svg";
import '../../../style/signupOrLogin.css'

const Success = () => {
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

                    <p className={'text-[20px] text-white mt-[30px] text-center'}>
                        به<span className={'text-mainGold'}> طلا ۲۴ </span> خوش آمدید
                    </p>

                    <div className={'mx-4 mt-5'}>
                        <button className={'bg-mainGold w-full rounded h-[45px]'}>
                            <p className={'text-black'}>
                                بازگشت به صفحه اصلی
                            </p>
                        </button>
                    </div>

                    <div className={'mx-4 mt-5'}>
                        <button className={'bg-[#212121] w-full rounded h-[45px]'}>
                            <p className={'text-white'}>
                                تکمیل مشخصات
                            </p>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Success;