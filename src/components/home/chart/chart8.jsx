import '../../../style/chart.css'
import person from '../../../images/person.svg'
import goldPrice from '../../../images/goldPriceChart.png'

const Chart8 = () => {
    return (
        <>
            <div className={'details-container flex w-100'}>
                <div className={'mr-5 mt-[60px] mb-[40px] w-1/2'}>
                    <h2 className={'mb-5'}>
                        مشاهده قیمت طلا به صورت آنلاین
                    </h2>
                    <div className={''}>
                        <div className={'flex float-right'}>

                            <div className={''}>
                                <div className={'details text-[10px] p-2 pl-[50px] leading-5'}>
                                    <p>مظنه خرید</p>
                                    <p className={'text-mainGold'}> 19,271,425 ریال</p>
                                </div>

                                <div className={'details text-[10px] p-2 pl-[50px] leading-5'}>
                                    <p>ساعت اخیر</p>
                                    <p className={'text-mainGold'}>۰.۵٪ +</p>
                                </div>
                                <button className={'register px-4 py-3 flex text-black'}>
                                    <img src={person} alt={'person'} className={'ml-2'}/>
                                    ثبت نام
                                </button>
                            </div>

                            <div className={''}>
                                <div className={'details text-[10px] p-2 pl-[50px] leading-5'}>
                                    <p>مظنه فروش</p>
                                    <p className={'text-mainGold'}> 19,271,425 ریال</p>
                                </div>

                                <div className={'details text-[10px] p-2 pl-[50px] leading-5'}>
                                    <p>هفته اخیر</p>
                                    <p className={'text-mainGold'}>۰.۵٪ +</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className={'main-chart w-1/2 mt-[30px] ml-[100px]'}>
                    <div className={'mainPrice mb-3 pb-5'}>
                        <p className={'text-[12px]'}>
                            طلای ۸ عیار
                        </p>
                        <p className={'text-mainGold text-[32px]'}>
                            5.987,34
                        </p>
                    </div>
                    <div className={'mb-[50px]'}>
                        <img src={goldPrice} alt={'goldPrice'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart8;