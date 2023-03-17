import api from "./api/api";
import axios from "axios";
import {render, fireEvent, getByRole, screen, act, waitFor} from "@testing-library/react";
import Bazaar from "./components/home/dashboard/Bazaar";
import { Router, MemoryRouter } from 'react-router-dom';
import Signup from './contexts/Signup'
import {PersianToEnglish} from './helper/PersianToEnglish'
import {EnglishToPersian} from './helper/EnglishToPersian'
import SignupOrLogin from "./components/home/Signup/SignupOrLogin";
import userEvent from "@testing-library/user-event";
import { mount } from 'enzyme';
import OTPInput from "./components/OTPInput";
import Login from "./components/home/Signup/Login";
import {createMemoryHistory} from "history";
import ConfirmUsername from "./components/home/Signup/ForgotPass/ConfirmUsername";
import ForgotPassword from "./components/home/Signup/ForgotPass/ForgotPassword";
import CreatePassword from "./components/home/Signup/CreatePassword";
import React, {useContext} from "react";
import signup from "./contexts/Signup";
import CompleteRegistration from "./components/home/Signup/CompleteRegistration";
import Success from "./components/home/Signup/Success";
import PasswordStrengthIndicator from "./components/home/PasswordStrengthIndicator";
import Chart24 from "./components/home/chart/chart24";
import HomePageChart from "./components/home/chart/HomePageChart";
import BallPulseSync from "./components/Loading/BallPulseSync";
import Cards from "./components/home/HomePage/Cards";
import Counters from "./components/home/HomePage/Counters";
import Footer from "./components/home/HomePage/Footer";
import Home from "./components/home/HomePage/Home";
import Comments from "./components/home/HomePage/Comments";
import Dashboard from "./components/home/dashboard/Dashboard";
import Hamburger from "./components/home/dashboard/Hamburger";
import Logs from "./components/home/dashboard/Logs";
import Request1 from "./components/home/dashboard/Request1";
import Request2 from "./components/home/dashboard/Request2";
import {indigo} from "@mui/material/colors";
import BuyGold from "./components/home/dashboard/BuyGold/BuyGold";
import SellGold from "./components/home/dashboard/SellGold/SellGold";
import UserChat from "./components/home/dashboard/Ticket/UserChat";
import UserTicket from "./components/home/dashboard/Ticket/UserTicket";

jest.mock('./api/api', () => ({
    get: jest.fn(),
    post: jest.fn(),
}));

describe('all', () => {

    test('shows modal when buyButton is clicked', () => {

        render(
            <Signup.Provider value={{
                verified: false
            }}>
                <MemoryRouter>
                    <Bazaar />
                </MemoryRouter>
            </Signup.Provider>
    );

        // Ensure modal is initially hidden
        expect(screen.queryByText('مشخصات خود را تکمیل کنید!')).toBeNull();

        // Find and click button to open modal
        const button = screen.getByRole('buyButton');
        fireEvent.click(button);

        // Ensure modal is now visible
        expect(screen.getByText('مشخصات خود را تکمیل کنید!')).toBeInTheDocument;
    });

    // test("should custom hook work!", async() => {
    //
    //     const data = {
    //         phoneNumber: "09924664362"
    //     };
    //
    //     const result = await api.get("https://persiancalapi.ir/jalali/1401/1/1")
    //     // const result = await axios.post("http://localhost:8090/api/v1/register/init", data)
    //     console.log(result)
    //
    //     expect(result.is_holiday).toEqual(true)
    // })


    describe('helper and SignUpOrLogin', () => {
        test("EnglishToPersian", () => {
            let x = "123"
            expect(EnglishToPersian(x)).toEqual("۱۲۳")
        })

        test("PersianToEnglish", () => {
            let x = "۱۲۳"
            expect(PersianToEnglish(x)).toEqual("123")
        })

        test("phoneNumber input should be initially empty", async() => {
            await act(() => {
                render(
                    <MemoryRouter>
                        <SignupOrLogin/>
                    </MemoryRouter>)

            })

            const inputField = screen.getByRole("textbox")
            expect(inputField.value).toBe("")

        })

        test("error show up when invalid phoneNumber typed", async() => {
            await act(() => {
                render(
                    <MemoryRouter>
                        <SignupOrLogin/>
                    </MemoryRouter>)

            })

            const button = screen.getByRole("button")
            const inputField = screen.getByRole("textbox")

            await act(() => {
                userEvent.type(inputField, "0922")
                userEvent.click(button)
            })

            expect(inputField.value).toBe("۰۹۲۲")

            const error = screen.getByText("شماره موبایل نادرست است.")

            expect(error).toBeInTheDocument
        })

        // test("valid phoneNumber typed", async() => {
        //     await act(() => {
        //         render(
        //             <MemoryRouter>
        //                 <SignupOrLogin/>
        //             </MemoryRouter>)
        //
        //     })
        //
        //     const button = screen.getByRole("button")
        //     const inputField = screen.getByRole("textbox")
        //
        //     await act(() => {
        //         userEvent.type(inputField, "09309129829")
        //         userEvent.click(button)
        //     })
        //
        //     RegisterApi.post = jest.fn()
        //         .mockResolvedValueOnce({ data: { status: 'newUser' } })
        //         .mockResolvedValueOnce({ data: { status: 'exist' } });
        //
        //     await waitFor(() => expect(RegisterApi.post).toHaveBeenCalledTimes(1));
        //
        //
        // })
    })

    describe("Login", () => {
        test("errors", async() => {

            await act(() => {
                render(
                    <Signup.Provider value={{
                        passwordAllowed: true
                    }}>
                        <MemoryRouter>
                            <Login />
                        </MemoryRouter>
                    </Signup.Provider>
                )

            })

            const button = screen.getByText("تایید")
            // const inputField = screen.getByRole("pass")

            await act(() => {
                userEvent.click(button)
            })

            const error = screen.getByText("لطفا رمز خود را وارد کنید.")
            expect(error).toBeInTheDocument

        })

        test("onChange test", async() => {
            await act(() => {
                render(
                    <Signup.Provider value={{
                        passwordAllowed: true
                    }}>
                        <MemoryRouter>
                            <Login />
                        </MemoryRouter>
                    </Signup.Provider>
                )

            })


            const inputField = screen.getByLabelText("password")

            await act(() => {
                userEvent.type(inputField, "123")
            })

            expect(inputField.value).toEqual("123")

        })

    })

    describe("Forgot Password", () => {
        test("Confirm username input field", async() => {
            await act(() => {
                render(
                    <MemoryRouter>
                        <ConfirmUsername />
                    </MemoryRouter>
                )
            })

            const input = screen.getByRole("textbox")
            const button = screen.getByRole("button")

            await act(() => {
                userEvent.click(button)
            })

            let error = screen.getByText("این فیلد الزامی است.")
            expect(error).toBeInTheDocument;

            // userEvent.type(input, "123")
            //
            // error = screen.getByText("شماره موبایل نادرست است.")
            //
            // await act(() => {
            //     userEvent.click(button)
            // })
            // expect(error).toBeInTheDocument;

        })

        test("Forgot password logic", async() => {
            await act(() => {
                render(
                    <MemoryRouter>
                        <ForgotPassword />
                    </MemoryRouter>
                )
            })

            const button = screen.getByText("تایید")
            const field1 = screen.getByLabelText("password")
            const field2 = screen.getByLabelText("passwordRepeat")

            await act(() => {
                userEvent.type(field1, "123456789")
                userEvent.type(field2, "123456788")
                userEvent.click(button)
            })

            const error = screen.getByText("رمز وارد شده با تکرار آن یکسان نمی باشد.")
            expect(error).toBeInTheDocument;


        })
    })

    describe("Create Password", () => {
        test("invalid input errors", async() => {
            const {container} =
                render(
                    <Signup.Provider value={{
                        createPassAllowed: true
                    }}>
                        <MemoryRouter>
                            <CreatePassword />
                        </MemoryRouter>
                    </Signup.Provider>
                )

            const button = screen.getByText("تایید")

            const field1 = container.getElementsByClassName("field bg-[#212121] w-full rounded h-[45px] p-4 text-white")[0].querySelector('input')
            const field2 = container.getElementsByClassName("field bg-[#212121] w-full rounded h-[45px] p-4 text-white")[1].querySelector('input')

            await act(() => {
                userEvent.type(field1, "123456789")
                userEvent.type(field2, "123456788")
                userEvent.click(button)
            })

            const error = screen.getByText("رمز وارد شده با تکرار آن یکسان نمی باشد.")
            expect(error).toBeInTheDocument;
        })
    })

    describe("Complete Registration and success", () => {
        test("inputs", async () => {
            await act(() => {
                render(
                    <Signup.Provider value={{
                        // accountCompleteRegistrationAllowed: true
                        information: [
                            {
                                infoType: "accountNumber"
                            },
                            {
                                infoType: "firstName"
                            },
                            {
                                infoType: "lastName"
                            },
                            {
                                infoType: "email"
                            },
                            {
                                infoType: "postalCode"
                            },
                            {
                                infoType: "address"
                            },
                            {
                                infoType: "fatherName"
                            },
                        ]
                    }}>
                        <MemoryRouter>
                            <CompleteRegistration />
                        </MemoryRouter>
                    </Signup.Provider>
                )
            })

            const firstName = screen.getByPlaceholderText("نام*")
            const lastName = screen.getByPlaceholderText("نام خانوادگی*")
            const nationalCode = screen.getByPlaceholderText("کد ملی*")
            const accountNumber = screen.getByPlaceholderText("شماره شبا*")
            const email = screen.getByPlaceholderText("ایمیل")
            const postalCode = screen.getByPlaceholderText("کدپستی")
            const address = screen.getByPlaceholderText("آدرس")
            const fatherName = screen.getByPlaceholderText("نام پدر")

            const button = screen.getByRole("button")

            await act(() => {
                userEvent.click(button)
            })

            let error = screen.getAllByText("این فیلد الزامی است.")
            expect(error).toBeInTheDocument

            await act(() => {
                userEvent.type(firstName, "test")
                userEvent.type(lastName, "test")
                userEvent.type(nationalCode, "test")
                userEvent.type(accountNumber, "123")
                userEvent.type(email, "asd@gmail.com")
                userEvent.type(postalCode, "123")
                userEvent.type(address, "asd")
                userEvent.type(fatherName, "asd")
                userEvent.click(button)
            })

            error = screen.getAllByText("کد ملی باید ۱۰ رقم باشد.")
            expect(error).toBeInTheDocument

            await act(() => {
                userEvent.type(nationalCode, "25815079644")
                userEvent.click(button)
            })

        })

        test("success", async() => {
            await act(() => {
                render(
                    <Signup.Provider value={{
                        successAllowed: true
                    }}>
                        <MemoryRouter>
                            <Success />
                        </MemoryRouter>
                    </Signup.Provider>
                )
            })

            const text = screen.getByText("داشبورد")
            expect(text).toBeInTheDocument
        })
    })

    // test("Password Strength Indicator", () => {
    //     const weekPass = "123"
    //     const strongPass = "Aryan821821"
    //
    //     render(<PasswordStrengthIndicator password={strongPass} />)
    //
    //     // const veryWeek = screen.getByText("خیلی ضعیف")
    //     // const week = screen.getByText("ضعیف")
    //     const medium = screen.getByText("متوسط")
    //     // const strong = screen.getByText("قوی")
    //
    //     expect(medium).toBeInTheDocument
    //
    // })


    // describe("chart", () => {
    //     test("rendered successfully", async() => {
    //         // const getPriceRes = [
    //         //     {
    //         //         adminUserName: "سید حسین شیرافکن",
    //         //         date: "1401/12/26 01:58:46",
    //         //         id:"657521c084a942ec8b588612fbe3274b",
    //         //         price:25300000
    //         //     }
    //         // ]
    //         //
    //         // api.get.mockResolvedValue(getPriceRes);
    //
    //         await act(() => {
    //             render(
    //                 <Chart24 />
    //             )
    //         })
    //
    //         const price = screen.getByText("مظنه فروش")
    //
    //         expect(price).toBeInTheDocument
    //     })
    //
    //     test("home page cart component", async() => {
    //         await act(() => {
    //             render(
    //                 <HomePageChart />
    //             )
    //         })
    //
    //         const chart24 = screen.getByText("مظنه خرید")
    //         expect(chart24).toBeInTheDocument
    //
    //     })
    // })

    test("ball Pulse Sync", () => {
        const { container } = render(<BallPulseSync />);
        const div = container.getElementsByClassName('la-ball-pulse-sync la-2x')[0];

        expect(div).not.toEqual(undefined);
    })

    describe("Home Page", () => {
        test("Cards Render", () => {
            render(<Cards />)

            const sentence = screen.getByText("سرمایه گذاری با کمترین مبلغ")
            expect(sentence).toBeInTheDocument;
        })

        test("Counter Rendered", () => {
            render(<Counters />)

            const sentence = screen.getByText("Counters")
            expect(sentence).toBeInTheDocument;
        })

        test("Comments Rendered", () => {
            render(<Comments />)

            const sentence = screen.getByText("نظرات مشتریان")
            expect(sentence).toBeInTheDocument;
        })

        test("Footer Rendered", () => {
            render(<Footer />)

            const sentence = screen.getByText("درباره ما")
            expect(sentence).toBeInTheDocument;
        })

        test("Home Rendered", () => {

            render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            )

            const sentence = screen.getByText("ورود | ثبت نام")
            expect(sentence).toBeInTheDocument;
        })

    })

    describe("dashboard", () => {
        test("dashboard rendered", () => {
            render(
                <MemoryRouter>
                    <Dashboard />
                </MemoryRouter>
            )

            const date = screen.getByText("تاریخ:")
            expect(date).toBeInTheDocument
        })


        test("Hamburger rendered", () => {
            render(
                <MemoryRouter>
                    <Hamburger />
                </MemoryRouter>
            )

            const test1 = screen.getByText("بازار")
            const test2 = screen.getByText("درخواست")
            const test3 = screen.getByText("گزارشات")
            const test4 = screen.getByText("خرید طلا")

            expect(test1).toBeInTheDocument
            expect(test2).toBeInTheDocument
            expect(test3).toBeInTheDocument
            expect(test4).toBeInTheDocument
        })

        test("Logs rendered", () => {
            render(
                <MemoryRouter>
                    <Logs />
                </MemoryRouter>
            )

            const test1 = screen.getByText("از تاریخ")
            const test2 = screen.getByText("تا تاریخ")

            expect(test1).toBeInTheDocument
            expect(test2).toBeInTheDocument
        })

        test("Request1 rendered", () => {
            render(
                <MemoryRouter>
                    <Request1 />
                </MemoryRouter>
            )

            const test1 = screen.getByText("درگاه پرداخت")
            const test2 = screen.getByText("پرداخت")

            expect(test1).toBeInTheDocument
            expect(test2).toBeInTheDocument
        })

        // test("Request2 rendered", () => {
        //     render(
        //         <MemoryRouter>
        //             <Request2 />
        //         </MemoryRouter>
        //     )
        //
        //     jest.mock("./data", () => [
        //         {    date: "2022-01-01",
        //             isAuthorized: "pending",
        //             checked: undefined,
        //             status: "pending",
        //             price: 100
        //         },
        //
        //         {    date: "2022-01-02",
        //             isAuthorized: "successful",
        //             checked: undefined,
        //             status: "successful",
        //             price: 200
        //         }]);
        //
        //     render(
        //         <MemoryRouter>
        //             <Request2 />
        //         </MemoryRouter>
        //     )
        //
        //     const test1 = screen.getByText("در حال بررسی")
        //     // const test2 = screen.getByText("از تاریخ")
        //
        //     expect(test1).toBeInTheDocument
        //     // expect(test2).toBeInTheDocument
        // })
    })

    describe("buy and sell gold", () => {
        test("Buy Gold progress bar", async () => {

            const getPriceRes = { price: 10 };
            api.get.mockResolvedValue(getPriceRes);

            await act(() => {
                render(<BuyGold />)
            })

            // const data = {
            //     price: 200000
            // }
            //
            // axios.get.mockImplementationOnce(() => Promise.resolve(data))

            const nextBtn = screen.getByRole("next-button")
            expect(screen.getAllByText("نوع دریافت")).toBeInTheDocument;

            await act(() => {
                userEvent.click(nextBtn)
            })

            expect(screen.getByText("بر اساس مبلغ")).toBeInTheDocument;

            await act(() => {
                userEvent.click(nextBtn)
            })

            expect(screen.getAllByText("پرداخت")).toBeInTheDocument;

            await act(() => {
                userEvent.click(nextBtn)
            })
        })

        test("Sell Gold Progress bar", async() => {
            const getPriceRes = { price: 10 };
            api.get.mockResolvedValue(getPriceRes);

            render(
                <Signup.Provider value={{
                    setInformation: jest.fn()
                }}>
                    <SellGold />
                </Signup.Provider>
            )

            const nextBtn = screen.getByRole("next-button")

            const byWeight = screen.getByLabelText("بر اساس وزن طلا")

            await act(() => {
                userEvent.click(byWeight)
            })

            const weightInput = screen.getByLabelText("وزن طلا")
            await act(() => {
                userEvent.type(weightInput, "12")
            })

            await act(() => {
                userEvent.click(nextBtn)
            })


            expect(screen.getByText("120 ریال")).toBeInTheDocument



        })
    })

    describe("ticket", () => {
        test("user ticket rendered", () => {
            const { container } = render(
                <MemoryRouter>
                    <UserTicket />
                </MemoryRouter>
            )
            const addNewTicket = container.getElementsByClassName("bg-[#dfaf3d] text-black px-2 py-1 font-normal" +
                " rounded hover:cursor-pointer transition")[0]

            act(() => {
                userEvent.click(addNewTicket)
            })

            const title = screen.getByText("لطفا عنوان تیکت خود را وارد کنید")

            expect(title).toBeInTheDocument
        })

    })

    describe('admin', () => {
        test("")
    })
})



































