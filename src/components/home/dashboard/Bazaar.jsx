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
            userGain: 35000,
            userLost: 235
        },
        {
            id: 3,
            year: 2018,
            userGain: 90000,
            userLost: 222
        },
        {
            id: 4,
            year: 2019,
            userGain: 30000,
            userLost: 236
        },
        {
            id: 5,
            year: 2020,
            userGain: 100000,
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

            <div className={'details-container w-100 md2:flex pb-[50px] md2:p-0 mt-10 rounded-[8px]'}>
                <div className={'md2:w-2/5 md2:justify-start md1:w-5/12 w-100 whitespace-nowrap flex justify-center'}>
                    <div className={'mr-5 mt-[40px] mb-[40px]'}>

                        <h2 className={'md2:text-right text-center md2:mb-[60px] mb-[20px] text-white text-[1.5rem]'}>
                            نمای بازار
                        </h2>
                        <div className={''}>
                            <div className={'flex float-right'}>

                                <div className={''}>
                                    <div className={'details text-[0.62rem] p-2 pl-[50px] leading-5 text-white'}>
                                        <p>مظنه خرید</p>
                                        <p className={'text-mainGold'}> 19,271,425 ریال</p>
                                    </div>

                                    <button className={'flex justify-center items-center rounded-[10px] text-white py-2 w-[135px]'}
                                            style={{border: '1px solid green'}}>
                                        خرید
                                    </button>
                                </div>

                                <div className={''}>
                                    <div className={'details text-[0.62rem] p-2 pl-[50px] leading-5 text-white'}>
                                        <p>مظنه فروش</p>
                                        <p className={'text-mainGold'}> 19,271,425 ریال</p>
                                    </div>

                                    <button className={'flex justify-center items-center rounded-[10px] text-white py-2 w-[135px]'}
                                            style={{border: '1px solid red'}}>
                                        فروش
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className={'xsm:pr-0 sm:pr-[20px] md2:w-3/5 md2:m-0 md2:p-0 md1:block md1:w-7/12 mr-[50px] mb-[50px] '}>
                    <div className={'main-chart md2:mt-[30px] ml-[30px]'}>
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