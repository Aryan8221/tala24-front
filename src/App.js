import React, {Component, useState} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./components/home/HomePage/Home";
import "./style/App.css";
import "./style/reset.css";
import SignupOrLogin from "./components/home/Signup/SignupOrLogin";
import Success from "./components/home/Signup/Success";
import Signup from "./components/home/Signup/Signup";
import Login from "./components/home/Signup/Login";
import CreatePassword from "./components/home/Signup/CreatePassword";
import Dashboard from "./components/home/dashboard/Dashboard";
import signup from "./contexts/signup";
import ForgotPassword from "./components/home/Signup/ForgotPass/ForgotPassword";
import ConfirmUsername from "./components/home/Signup/ForgotPass/ConfirmUsername";
import Bazaar from "./components/home/dashboard/Bazaar";
import Request2 from "./components/home/dashboard/Request2";
import Logs from "./components/home/dashboard/Logs";
import BuyGold from "./components/home/dashboard/BuyGold/BuyGold";
import UserTicket from "./components/home/dashboard/Ticket/UserTicket";
import UserChat from "./components/home/dashboard/Ticket/UserChat"
import CompleteRegistration from "./components/home/Signup/CompleteRegistration";
import SellGold from "./components/home/dashboard/SellGold/SellGold";

const App = () => {
    const [OTPAllowed, setOTPAllowed] = useState(false)
    const [passwordAllowed, setPasswordAllowed] = useState(false)
    const [dashboardAllowed, setDashboardAllowed] = useState(false)
    const [createPassAllowed, setCreatePassAllowed] = useState(false)
    const [successAllowed, setSuccessAllowed] = useState(false)
    const [accountCompleteRegistrationAllowed, setAccountCompleteRegistrationAllowed] = useState(true)
    const [information, setInformation] = useState([])
    const [verified, setVerified] = useState(false)
    const [selected, setSelected] = useState("bazaar")

    const [logs, setLogs] = useState([])

    const [newUserPhoneNumber, setNewUserPhoneNumber] = useState("")
    const [newUserPassword, setNewUserPassword] = useState("")

    return (
        <>
            <signup.Provider value={{
                setOTPAllowed: setOTPAllowed,
                OTPAllowed: OTPAllowed,

                passwordAllowed: passwordAllowed,
                setPasswordAllowed: setPasswordAllowed,

                dashboardAllowed: dashboardAllowed,
                setDashboardAllowed: setDashboardAllowed,

                createPassAllowed: createPassAllowed,
                setCreatePassAllowed: setCreatePassAllowed,

                successAllowed: successAllowed,
                setSuccessAllowed: setSuccessAllowed,

                verified: verified,
                setVerified: setVerified,

                information: information,
                setInformation: setInformation,

                selected: selected,
                setSelected: setSelected,

                logs: logs,
                setLogs: setLogs,

                accountCompleteRegistrationAllowed: accountCompleteRegistrationAllowed,
                setAccountCompleteRegistrationAllowed: setAccountCompleteRegistrationAllowed,

                newUserPhoneNumber: newUserPhoneNumber,
                setNewUserPhoneNumber: setNewUserPhoneNumber,

                newUserPassword: newUserPassword,
                setNewUserPassword: setNewUserPassword
            }} >
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={(<Home/>)}/>
                        <Route path="/login" element={(<SignupOrLogin/>)}/>
                        <Route path="/OTP-code" element={(<Signup/>)}/>
                        <Route path="/password" element={(<Login/>)}/>
                        <Route path="/welcome" element={(<Success/>)}/>
                        <Route path="/signup" element={(<Signup/>)}/>
                        <Route path="/create-password" element={(<CreatePassword/>)}/>
                        <Route path="/dashboard" element={(<Dashboard/>)}>
                            <Route path="" element={<Bazaar />} />
                            <Route path="request" element={<Request2 />} />
                            <Route path="logs" element={<Logs />} />
                            <Route path="buy-gold" element={<BuyGold />} />
                            <Route path="sell-gold" element={<SellGold />} />
                            <Route path="ticket" element={<UserTicket />} />
                            <Route path="ticket/chat" element={<UserChat />} />
                            <Route path="complete-info" element={<CompleteRegistration />} />
                        </Route>
                        <Route path="/forgot-password" element={(<ForgotPassword/>)}/>
                        {/*<Route path="/accountCompleteRegistration" element={(<CompleteRegistration/>)}/>*/}
                    </Routes>
                </BrowserRouter>
            </signup.Provider>
        </>
    )
}

export default App;
