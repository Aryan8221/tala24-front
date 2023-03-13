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
import {useContext} from "react";
import signup from "./contexts/Signup";
import CompleteRegistration from "./components/home/Signup/CompleteRegistration";
import Success from "./components/home/Signup/Success";
import PasswordStrengthIndicator from "./components/home/PasswordStrengthIndicator";
import Chart24 from "./components/home/chart/chart24";
import HomePageChart from "./components/home/chart/HomePageChart";
import BallPulseSync from "./components/Loading/BallPulseSync";

// jest.mock('axios');

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

    test("should custom hook work!", async() => {

        const data = {
            phoneNumber: "09924664362"
        };

        const result = await api.get("https://persiancalapi.ir/jalali/1401/1/1")
        // const result = await axios.post("http://localhost:8090/api/v1/register/init", data)
        console.log(result)

        expect(result.is_holiday).toEqual(true)
    })


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


    describe("chart", () => {
        test("rendered successfully", async() => {
            await act(() => {
                render(
                    <Chart24 />
                )
            })

            const price = screen.getByText("مظنه فروش")

            expect(price).toBeInTheDocument
        })

        test("home page cart component", async() => {
            await act(() => {
                render(
                    <HomePageChart />
                )
            })

            const chart24 = screen.getByText("مظنه خرید")
            expect(chart24).toBeInTheDocument

        })
    })

    test("ball Pulse Sync", () => {
        const { container } = render(<BallPulseSync />);
        const div = container.getElementsByClassName('la-ball-pulse-sync la-2x')[0];

        expect(div).not.toEqual(undefined);
    })
})

