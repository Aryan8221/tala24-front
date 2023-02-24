import axios from "axios";

const axiosParams = {
    baseURL: 'http://localhost:8090/api/v1/register'
}

const axiosInstance = axios.create(axiosParams);


const RegisterApi = (axios) => {

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    return {
        post: (url, body, config = {
            withCredentials: true,
            headers: {
                'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'),
            }
        }) =>
            axios.post(url, body, config)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    return error
            })
    }

}

export default RegisterApi(axiosInstance);