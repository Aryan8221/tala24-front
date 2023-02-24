import React, {useState} from "react"
import {Link} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepOrange, deepPurple} from '@mui/material/colors';
import  "./../../../../style/ticket.css"


function UserChat() {

    const [ticket, updateTicket] = useState(
        {
            title: 'پول بده',
            chat: [
                {
                    sender: 'user',
                    name: 'میلاد',
                    time: '1401/09/07',
                    message: 'سلام'
                },
                {
                    sender: 'admin',
                    time: '1401/09/07',
                    message: 'سلام پشتیبانی در خدمتم'
                }
            ]
        }
    )
    const [typedMessage, updateTypedMessage] = useState()


    const handleSendMessage = () => {
        /* const newMessage = {
             sender: 'user',
             message: typedMessage
         }
         console.log(ticket)*/
    }


    return(
        <div className="mt-5 text-white rounded-[8px] font-bold">
            <h2 className="text-xl text-center font-medium mb-6">
                 تیکت
            </h2>
            <div className="chat-box">
                <div className="chat-box-body">
                    <div className="flex justify-center">
                        <div className="chat-messenger">
                            <div className="chat-messenger-header text-white">
                                {ticket.title}
                            </div>
                            <div className="chat-messenger-body">
                                {
                                    ticket.chat.map((mes) => (
                                        mes.sender == 'admin'
                                            ? (
                                                <>
                                                    <div className="flex justify-center">
                                                        <div className='chat-messenger-time'>{mes.time}</div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <div className="flex flex-col">
                                                            <div className='chat-messenger-item-info'>
                                                                <Stack direction="row" spacing={2}>
                                                                    <Avatar className='ml-2'>پ</Avatar>
                                                                </Stack>
                                                                <span>برادر پشتیبان</span>
                                                            </div>
                                                            <div className='chat-messenger-item admin-message'>
                                                                {mes.message}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>

                                            )
                                            : (
                                                <>
                                                    <div className="flex justify-center">
                                                        <div className='chat-messenger-time'>{mes.time}</div>
                                                    </div>
                                                    <div className="flex justify-start">
                                                        <div className="flex flex-col">
                                                        <span className='chat-messenger-item-info'>
                                                             <Stack direction="row" spacing={2}>
                                                                    <Avatar className='ml-2'>{mes.name.slice(0,1)}</Avatar>
                                                                </Stack>
                                                            <span>{mes.name}</span>
                                                        </span>
                                                            <div className='chat-messenger-item user-message'>
                                                                {mes.message}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                    ))
                                }
                            </div>
                            <div className="chat-messenger-footer">
                                <input type='text' placeholder='یک پیام تایپ کنید' className='outline-0	'
                                       onChange={(e) => updateTypedMessage(e.target.value)}/>
                                <button className='send-message' onClick={handleSendMessage}>ارسال</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserChat