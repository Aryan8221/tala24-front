import logo from "../../../images/lastLogo.png"
import {AiOutlineClose, AiOutlineStock} from "react-icons/ai";
import {BiFirstAid} from "react-icons/bi";
import {TbReportAnalytics} from "react-icons/tb";
import '../../../style/hamburger.css';

const Hamburger = ({selected, setSelected}) => {
    return (
        <div className={'w-[250px] h-screen bg-[#141414] rounded-l-[35px]'}>
            <div className={'flex justify-end text-white pl-4 pt-4 md1:hidden'}>
                <AiOutlineClose className={'cursor-pointer'} onClick={() => {
                    document.getElementById('ham').className = 'slide-right absolute top-0 block'
                    document.getElementById('main-container').className = 'flex'
                }}/>
            </div>

            <div className={'flex justify-center md1:pt-8'}>
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
    )
}

export default Hamburger;