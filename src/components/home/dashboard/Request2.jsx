import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from '@mui/material/Paper';
import '../../../style/request.css'


const Request2 = () => {
    return (
        <div className={'mx-9 mt-5'}>
            <h2 className={'text-white'}>
                درخواست
            </h2>

            <div className={'text-white bg-[#141414] mt-10 rounded-[8px] p-5'}>
                <h2>
                    برداشت وجه
                </h2>
                <div className={'sm:flex justify-center text-[0.7rem] mt-6 pb-4'} style={{borderBottom: '1px solid #6F6F6F'}}>
                    <div className={'md:flex'}>
                        <div className={''}>
                            <div className={'mb-2'}>
                                مبلغ(تومان)
                            </div>
                            <div>
                                <input className={'field bg-[#212121] w-full sm:w-[150px] rounded-sm h-[48px] p-4 text-white'}/>
                            </div>
                        </div>
                        <div className={'sm:ml-5 md:mx-5'}>
                            <div className={'mb-2 mt-4 sm:mt-2 md:mt-0'}>
                                حساب بانکی
                            </div>
                            <div>
                                <select className={'field text-[0.6rem] w-full sm:w-[150px] bg-[#212121] h-[48px] p-4 text-white'} >
                                    <option>
                                        بانک سامان
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={'md:flex'}>
                        <div className={''}>
                            <div className={'mb-2 mt-4 sm:mt-0'}>
                                تاریخ
                            </div>
                            <div>
                                <input className={'field bg-[#212121] w-full sm:w-[150px] rounded-sm h-[48px] p-4 text-white'}/>
                            </div>
                        </div>
                        <div className={''}>
                            <div className={'mt-6'}/>
                            <button className={'h-[48px] w-full sm:w-[150px] bg-[#A32020] text-[0.9rem] rounded-lg md:mr-4 mt-2 md:mt-0'}>
                                برداشت
                            </button>
                        </div>
                    </div>
                </div>

                <div className={'overflow-scroll'}>
                    <h2 className={'my-5'}>
                        سابقه برداشت ها
                    </h2>

                    <table>
                        <tr>
                            <th className={'p-4'}>شماره</th>
                            <th className={'p-4'}>تاریخ</th>
                            <th className={'p-4'}>وضعیت درخواست</th>
                            <th className={'p-4'}>کد رهگیری</th>
                            <th className={'p-4'}>مبلغ</th>
                        </tr>
                        <tr>
                            <td className={'p-3'}>۱۲۳۴۵۶</td>
                            <td className={'p-3'}>1401/11/14</td>
                            <td className={'p-3'}>
                                <p className={'status'}>
                                    فعال
                                </p>
                            </td>
                            <td className={'p-3'}>۸۱۲۳۸۹۲</td>
                            <td className={'p-3'}>۱۲۰۰۰۰ تومان</td>
                        </tr>
                        <tr>
                            <td className={'p-3'}>۱۲۳۴۵۶</td>
                            <td className={'p-3'}>1401/11/14</td>
                            <td className={'p-3'}>
                                <p className={'status'}>
                                    فعال
                                </p>
                            </td>
                            <td className={'p-3'}>۸۱۲۳۸۹۲</td>
                            <td className={'p-3'}>۱۲۰۰۰۰ تومان</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Request2;