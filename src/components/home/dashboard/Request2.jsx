import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from '@mui/material/Paper';
import '../../../style/request.css'
import {useEffect, useState} from "react";
import api from "../../../api/api";
import {EnglishToPersian} from "../../../helper/EnglishToPersian";


const Request2 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const getPaymentsRes = await api.get(`account/${localStorage.getItem("id")}`)
            if (getPaymentsRes) {
                setData(getPaymentsRes.payments)
            }
        }
        getData()
        console.log(data)
    }, []);

    return (
        <div className={'mx-9 mt-5'}>
            <h2 className={'text-white'}>
                درخواست
            </h2>

            <div className={'text-white bg-[#141414] mt-10 rounded-[8px] p-5'}>
                {/*<h2>*/}
                {/*    برداشت وجه*/}
                {/*</h2>*/}
                {/*<div className={'sm:flex justify-center text-[0.7rem] mt-6 pb-4'} style={{borderBottom: '1px solid #6F6F6F'}}>*/}
                {/*    <div className={'md:flex'}>*/}
                {/*        <div className={''}>*/}
                {/*            <div className={'mb-2'}>*/}
                {/*                مبلغ(تومان)*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <input className={'field bg-[#212121] w-full sm:w-[150px] rounded-sm h-[48px] p-4 text-white'}/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={'sm:ml-5 md:mx-5'}>*/}
                {/*            <div className={'mb-2 mt-4 sm:mt-2 md:mt-0'}>*/}
                {/*                حساب بانکی*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <select className={'field text-[0.6rem] w-full sm:w-[150px] bg-[#212121] h-[48px] p-4 text-white'} >*/}
                {/*                    <option>*/}
                {/*                        بانک سامان*/}
                {/*                    </option>*/}
                {/*                </select>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={'md:flex'}>*/}
                {/*        <div className={''}>*/}
                {/*            <div className={'mb-2 mt-4 sm:mt-0'}>*/}
                {/*                تاریخ*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <input className={'field bg-[#212121] w-full sm:w-[150px] rounded-sm h-[48px] p-4 text-white'}/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={''}>*/}
                {/*            <div className={'mt-6'}/>*/}
                {/*            <button className={'h-[48px] w-full sm:w-[150px] bg-[#A32020] text-[0.9rem] rounded-lg md:mr-4 mt-2 md:mt-0'}>*/}
                {/*                برداشت*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={'overflow-scroll overflow-y-hidden'}>
                    <h2 className={'my-5'}>
                        سابقه درخواست ها
                    </h2>

                    <table>
                        <tr>
                            <th className={'p-4 text-center'}>شماره</th>
                            <th className={'p-4 text-center'}>تاریخ</th>
                            <th className={'p-4 text-center'}>وضعیت درخواست</th>
                            <th className={'p-4 text-center'}>کد رهگیری</th>
                            <th className={'p-4 text-center'}>مبلغ</th>
                            <th className={'p-4 text-center'}>بررسی شده</th>
                        </tr>
                        {
                            data.map((data, index) =>
                                <tr>
                                    <td className={'p-3 text-center'}>{index + 1}</td>
                                    <td className={'p-3 text-center'}>{data.date}</td>
                                    <td className={'p-3 flex justify-center'}>
                                        <p className={'status'}>
                                            {
                                                data.status === "pending" ?
                                                    "در حال انتظار" :
                                                    data.status === "failed" ?
                                                        "رد شده" :
                                                        data.status === "successful" ?
                                                            "موفقیت آمیز" : null
                                            }
                                        </p>
                                    </td>
                                    <td className={'p-3 text-center'}>{data.refID}</td>
                                    <td className={'p-3 text-center'}>{EnglishToPersian(data.price.toString())} تومان</td>
                                </tr>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Request2;