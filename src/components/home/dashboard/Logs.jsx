import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from '@mui/material/Paper';
import '../../../style/request.css'
import {FiFilter} from "react-icons/fi";


const Logs = () => {
    return (
        <div className={'mx-9 mt-5'}>
            <h2 className={'text-white'}>
                گزارشات
            </h2>

            <div className={'text-white bg-[#141414] mt-10 rounded-[8px] p-5'}>
                <div className={'flex items-center'}>
                    <FiFilter size={20}/>
                    <h2 className={'mr-1'}>
                        فیلتر
                    </h2>
                </div>
                <div className={'flex text-[0.7rem] mt-6 w-2/3 pb-4'} style={{borderBottom: '1px solid #6F6F6F'}}>
                    <div>
                        <div className={'mb-2'}>
                            از تاریخ
                        </div>
                        <div>
                            <input className={'field bg-[#212121] w-[150px] rounded-sm h-[48px] p-4 text-white'}/>
                        </div>
                    </div>
                    <div className={'mx-5'}>
                        <div className={'mb-2'}>
                            تا تاریخ
                        </div>
                        <div>
                            <select className={'field text-[0.6rem] bg-[#212121] rounded-sm w-[150px] h-[48px] p-4 text-white'} >
                                <option>
                                    بانک سامان
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className={'mt-6'}/>
                        <button className={'h-[48px] px-10 bg-[#DFAF3D] text-[0.8rem] rounded-lg text-black'}>
                            جستجو
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className={'my-5'}>
                        گزارشات
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

export default Logs;