import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from '@mui/material/Paper';
import '../../../style/request.css'
import {FiFilter} from "react-icons/fi";
import {useEffect, useState} from "react";
import api from '../../../api/api'


const Logs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // api.get(`payment/search/${localStorage.getItem("id")}/search?status=pending`).then((response) => { // bug not fixed!
        //     // setLogs(response)
        //     console.log(response)
        // })


    }, [])

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
                <div className={'sm:flex justify-center text-[0.7rem] mt-6 pb-4'} style={{borderBottom: '1px solid #6F6F6F'}}>
                    <div className={'sm:flex'}>
                        <div className={'mt-2'}>
                            <div className={'mb-2'}>
                                از تاریخ
                            </div>
                            <div>
                                <input className={'field bg-[#212121] w-full sm:w-[150px] h-[48px] p-4 text-white'}/>
                            </div>
                        </div>
                        <div className={'sm:ml-5 sm:mx-5'}>
                            <div className={'mb-2 mt-4 sm:mt-2'}>
                                تا تاریخ
                            </div>
                            <div>
                                <input className={'field bg-[#212121] w-full sm:w-[150px] h-[48px] p-4 text-white'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'md:flex'}>
                        <div className={''}>
                            <div className={'mt-6'}/>
                            <button className={'h-[50px] w-full sm:w-[150px] bg-[#DFAF3D] text-[0.9rem] text-black rounded-lg mt-2'}>
                                جستجو
                            </button>
                        </div>
                    </div>
                </div>

                <div className={'overflow-scroll'}>

                    {
                        logs.length !== 0 ?
                            <>
                                <h2 className={'my-5'}>
                                    سابقه واریزی ها
                                </h2>
                                <table>
                                    <tr>
                                        <th className={'p-4'}>شماره</th>
                                        <th className={'p-4'}>تاریخ</th>
                                        <th className={'p-4'}>وضعیت درخواست</th>
                                        <th className={'p-4'}>کد رهگیری</th>
                                        <th className={'p-4'}>مبلغ</th>
                                    </tr>

                                    {
                                        logs.map((log, index) => (
                                            <tr>
                                                <td className={'p-3'}>{index}</td>
                                                <td className={'p-3'}>{log.date}</td>
                                                <td className={'p-3'}>
                                                    {
                                                        log.status === "pending"
                                                            ? <p className={'statusPending'}>
                                                                در حال بررسی
                                                            </p>
                                                            : log.status === "failed"
                                                            ? <p className={'statusFailed'}>
                                                                رد شده
                                                            </p>
                                                            : log.status === "successful"
                                                                ? <p className={'statusSuccessful'}>
                                                                    موفق
                                                                </p>
                                                                : null
                                                    }
                                                </td>
                                                <td className={'p-3'}>۸۱۲۳۸۹۲</td>
                                                <td className={'p-3'}>{log.price}</td>
                                            </tr>
                                        ))
                                    }

                                    {/*<tr>*/}
                                    {/*    <td className={'p-3'}>۱۲۳۴۵۶</td>*/}
                                    {/*    <td className={'p-3'}>1401/11/14</td>*/}
                                    {/*    <td className={'p-3'}>*/}
                                    {/*        <p className={'status'}>*/}
                                    {/*            فعال*/}
                                    {/*        </p>*/}
                                    {/*    </td>*/}
                                    {/*    <td className={'p-3'}>۸۱۲۳۸۹۲</td>*/}
                                    {/*    <td className={'p-3'}>۱۲۰۰۰۰ تومان</td>*/}
                                    {/*</tr>*/}

                                    {/*<tr>*/}
                                    {/*    <td className={'p-3'}>۱۲۳۴۵۶</td>*/}
                                    {/*    <td className={'p-3'}>1401/11/14</td>*/}
                                    {/*    <td className={'p-3'}>*/}
                                    {/*        <p className={'status'}>*/}
                                    {/*            فعال*/}
                                    {/*        </p>*/}
                                    {/*    </td>*/}
                                    {/*    <td className={'p-3'}>۸۱۲۳۸۹۲</td>*/}
                                    {/*    <td className={'p-3'}>۱۲۰۰۰۰ تومان</td>*/}
                                    {/*</tr>*/}

                                </table>
                            </>
                            :
                            <h2 className={"text-[red] mt-5 text-[1.3rem] text-center"}>
                                تراکنشی انجام نشده!
                            </h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default Logs;