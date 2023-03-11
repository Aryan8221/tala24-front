import api from "./api/api";
import axios from "axios";
import {render, fireEvent, getByRole, screen} from "@testing-library/react";
import Bazaar from "./components/home/dashboard/Bazaar";
import { Router, MemoryRouter } from 'react-router-dom';
import Signup from './contexts/Signup'
import {useContext} from "react";
import signup from "./contexts/Signup";

// jest.mock('axios');

describe('app', () => {

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

    // });
    test("should custom hook work!", async() => {

        const data = {
            phoneNumber: "09924664362"
        };

        const result = await api.get("https://persiancalapi.ir/jalali/1401/1/1")
        // const result = await axios.post("http://localhost:8090/api/v1/register/init", data)
        console.log(result)

        expect(result.is_holiday).toEqual(true)
    })

})