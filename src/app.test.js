import api from "./api/api";
import axios from "axios";

// jest.mock('axios');

describe('app', () => {


    // it('modal appears when button is clicked', () => {
    //     const { getByText, queryByText } = render(<Bazaar />);
    //     const button = getByText('خرید');
    //     fireEvent.click(button);
    //
    //     expect(queryByText('Modal Content')).toBeNull();
    // });

    // afterEach(() => {
    //     jest.resetAllMocks();
    // });
    //
    // it('should make a POST request with the provided data and headers', async () => {
    //     const mockResponseData = {
    //         firstName: null,
    //         lastName: null,
    //         nationalCode: null,
    //         otp: null,
    //         password: null,
    //         phoneNumber: "09924664362",
    //         role: null,
    //         status: "exist"
    //     };
    //     // axios.post.mockResolvedValueOnce({ mockResponseData });
    //
    //     const data = { phoneNumber: "09924664362" };
    //
    //     const response = await axios.post("http://localhost:8090/api/v1/register/init", data, {
    //         withCredentials: true,
    //     });
    //     console.log(response)
    //
    //     expect(response).toEqual(mockResponseData);
    // });
    //
    // it('should login work',async () => {
    //     // const mockResponseData = 200
    //     // axios.post.mockResolvedValueOnce({ mockResponseData });
    //
    //     const data = {
    //         password: "airByte",
    //         username: "09924664362"
    //     };
    //
    //     const response = await axios.post("http://localhost:8090/login", data, {
    //         withCredentials: true,
    //     });
    //
    //     console.log(response)
    //
    //     expect(response.mockResponseData).toEqual(200);
    // });
    test("should axios work", async() => {

        const data = {
            phoneNumber: "09924664362"
        };

        const result = await api.register("register/init", data)
        console.log(result)
    })

})