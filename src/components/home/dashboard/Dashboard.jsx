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


const Dashboard = () => {

    const [selected, setSelected] = useState('request');

    return (
        <>
            <div className={'flex'}>
                <div className={'w-[250px] h-screen bg-[#141414] rounded-l-[35px]'}>
                    <div className={'flex justify-center pt-8'}>
                        <img src={logo} alt={'logo'} className={'w-1/2'}/>
                    </div>

                    <div className={'text-white'}>
                        <div className={`flex cursor-pointer mt-20 w-[220px]
                                    ${selected === 'bazaar' ? "bg-[#DFAF3D] text-black" : "text-white"} mx-3 rounded-lg`}
                             onClick={() => setSelected('bazaar')}
                        >
                            {/*<img src={bazaar} alt={'bazaar'} />*/}

                            <div className={'pr-5 py-2'}>
                                <AiOutlineStock size={'25'} className={'cursor-pointer'}/>
                            </div>
                            <p className={'py-2 mr-1'}>بازار</p>
                        </div>


                        <div className={`flex cursor-pointer mt-2
                                    ${selected === 'request' ? "bg-[#DFAF3D] text-black" : "text-white"} mx-3 rounded-lg`}
                             onClick={() => setSelected('request')}
                        >
                            {/*<img src={bazaar} alt={'bazaar'} />*/}

                            <div className={'pr-5 py-2'}>
                                <BiFirstAid size={'23'}/>
                            </div>
                            <p className={'py-2 mr-1'}>درخواست</p>
                        </div>

                        <div className={`flex cursor-pointer mt-2
                                    ${selected === 'log' ? "bg-[#DFAF3D] text-black" : "text-white"} mx-3 rounded-lg`}
                             onClick={() => setSelected('log')}
                        >
                            {/*<img src={bazaar} alt={'bazaar'} />*/}

                            <div className={'pr-5 py-2'}>
                                <TbReportAnalytics size={'25'}/>
                            </div>
                            <p className={'py-2 mr-1'}>گزارشات</p>
                        </div>
                    </div>
                </div>
                <div className={'w-screen'}>
                    <div className={'flex items-center text-white bg-[#141414] h-[79px] mt-10 mx-7 rounded-[20px]'}>

                        <div className={'flex justify-start w-full'}>
                            <p className={'text-white text-[0.8rem] mr-5'}>
                                سلام میلاد عزیز، خوش آمدید!
                            </p>
                        </div>

                        <div className={'flex justify-end w-full items-center'}>
                            <p className={'text-white text-[0.8rem]'}>
                                خزانه: 938,000 تومان
                            </p>
                            <div className={'mx-3'}>
                                <FcPlus size={'25'}/>
                            </div>
                            <div className={'pr-5'} style={{borderRight: '1px solid #AFAFAF'}}>
                                <IoCalendarOutline size={'25'}/>
                            </div>
                            <p className={'text-white text-[0.8rem] mr-2'}>
                                تاریخ:
                            </p>
                            <p className={'text-white text-[0.8rem] mr-2 ml-4'}>
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