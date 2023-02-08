import '../../../style/chart.css'
import {Line} from "react-chartjs-2";
import {useState} from "react";

const Bazaar = () => {

    const UserData = [
        {
            id: 1,
            year: 2016,
            userGain: 80000,
            userLost: 823
        },
        {
            id: 2,
            year: 2017,
            userGain: 60000,
            userLost: 235
        },
        {
            id: 3,
            year: 2018,
            userGain: 55456,
            userLost: 222
        },
        {
            id: 4,
            year: 2019,
            userGain: 65466,
            userLost: 236
        },
        {
            id: 5,
            year: 2020,
            userGain: 88899,
            userLost: 456
        },

    ]

    const [userData, setUserData] = useState({
        labels: UserData.map((i) => i.year), // years
        datasets: [
            {
                label: "قیمت طلا",
                data: UserData.map((i) => i.userGain),
                backgroundColor: ["#d0a94d"],
                borderColor: ["#d0a94d"],
                tension: 0.1,
                // borderDash: [3],
                // borderDashOffset: 5
                // borderJoinStyle: 'round'
                // clip: 4,
                // fill: true,
            }
        ],
    })

    return (
        <div className={'mx-9 mt-5'}>
            <h2 className={'text-white'}>
                بازار
            </h2>

            <div className={'flex bg-[#141414] mt-10 rounded-[8px]'}>

                <div className={'m-10'}>
                    <h2 className={'text-white text-[1.5rem] mr-2 mb-10'}>
                        نمای بازار
                    </h2>
                    <div className={'flex'}>
                        <div className={'text-[0.8rem]'}>
                            <div className={'details text-white text-[0.62rem] p-2 pl-[50px] leading-5'}>
                                <p>مظنه فروش</p>
                                <p className={'text-mainGold whitespace-nowrap'}>ریال 19,271,425 </p>
                            </div>
                            <button className={'flex justify-center items-center rounded-[10px] text-white py-2 w-[135px]'}
                                 style={{border: '1px solid green'}}>
                                خرید
                            </button>
                        </div>

                        <div className={'text-[0.8rem]'}>
                            <div className={'details text-white text-[0.62rem] p-2 pl-[50px] leading-5'}>
                                <p>مظنه خرید</p>
                                <p className={'text-mainGold whitespace-nowrap'}>ریال 19,271,425 </p>
                            </div>
                            <button className={'flex justify-center items-center rounded-[10px] text-white py-2 w-[135px]'}
                                 style={{border: '1px solid red'}}>
                                فروش
                            </button>
                        </div>
                    </div>


                </div>

                <div className={'xsm:pr-0 sm:pr-[20px] md2:w-3/5 md2:m-0 md2:p-0 md1:block md1:w-7/12 mr-[50px] mb-[50px] '}>
                    <div className={'main-chart mt-[30px] ml-[30px]'}>
                        <div className={'mainPrice mb-3 pb-5'}>
                            <p className={'text-[12px] text-white'}>
                                طلای ۲۴ عیار
                            </p>
                            <p className={'text-mainGold text-[32px]'}>
                                5.987,34
                            </p>
                        </div>

                        <Line className={'md1:p-0 mb-12'} data={userData} type={'line'}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bazaar;