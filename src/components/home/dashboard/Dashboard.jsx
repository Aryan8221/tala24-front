import {useState} from "react";
import Bazaar from "./Bazaar";
import Request1 from "./Request1";
import Logs from "./Logs";

import logo from '../../../images/logo.svg';
import bazaar from '../../../images/bazaar.svg';
import {AiOutlineStock} from "react-icons/ai";
import {BiFirstAid} from "react-icons/bi";
import {TbReportAnalytics} from "react-icons/tb";
import {IoCalendarOutline} from "react-icons/io5";
import {FcPlus} from "react-icons/fc";
import Request2 from "./Request2";
import {RxHamburgerMenu} from "react-icons/rx";
import Hamburger from "./Hamburger";

import '../../../style/hamburger.css'


const Dashboard = () => {

    const [selected, setSelected] = useState('bazaar');

    return (
        <>
            <div className={'flex'} id={'main-container'}>

                <div className={'md1:block hidden'} id={'ham'}>
                    <Hamburger selected={selected} setSelected={setSelected}/>
                </div>

                <div className={'w-screen'}>
                    <div className={'flex items-center text-white bg-[#141414] h-[79px] mt-10 mx-7 rounded-[20px]'}>

                        <div className={'md1:flex hidden justify-start w-full'}>
                            <p className={'text-white text-[0.8rem] mr-5'}>
                                سلام میلاد عزیز، خوش آمدید!
                            </p>
                        </div>

                        <div className={'md1:hidden'}>
                            <RxHamburgerMenu size={30} className={'mr-5 cursor-pointer'} onClick={() => {
                                document.getElementById('ham').className = 'slide-left absolute top-0';
                                document.getElementById('main-container').className = 'flex fixed';
                            }}/>
                        </div>

                        <div className={'flex justify-end w-full items-center'}>
                            <p className={'text-white text-[0.8rem]'}>
                                خزانه: 938,000 تومان
                            </p>
                            <div className={'mx-3'}>
                                <FcPlus size={'25'}/>
                            </div>
                            <div className={'md1:block hidden pr-5'} style={{borderRight: '1px solid #AFAFAF'}}>
                                <IoCalendarOutline size={'25'}/>
                            </div>
                            <p className={'md1:block hidden text-white text-[0.8rem] mr-2'}>
                                تاریخ:
                            </p>
                            <p className={'md1:block hidden text-white text-[0.8rem] mr-2 ml-4'}>
                                {
                                    new Date().toLocaleDateString('fa-IR-u-nu')
                                }
                            </p>
                        </div>
                    </div>
                    {
                        selected === "bazaar"
                            ? <Bazaar />
                            : selected === 'request'
                            ? <Request2 />
                            : <Logs />
                    }
                </div>

            </div>

        </>
    )
}

export default Dashboard;