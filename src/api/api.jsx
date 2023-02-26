import axios from "axios";
import LoginApi from "./LoginApi";

const axiosParams = {
    baseURL: 'http://localhost:8090/api/v1/'
    // baseURL: 'https://catfact.ninja/'
}

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
    return {
        get: async (url, config = {
            headers: {
                'Authorization': localStorage.getItem("Authorization"),
            }
        }) =>
            await axios.get(url, config)
                .then((response) => {
                    return response.data
                })

                .catch(async () => {
                    await LoginApi()
                    await axios.get(url, config)
                        .then((response) => {
                            return response.data
                        })
                        .catch(() => {
                            document.cookie = ""
                            localStorage.removeItem("Authorization")
                            localStorage.removeItem("username")
                            localStorage.removeItem("password")
                            localStorage.removeItem("id")
                            window.location = '/'
                        })
                }),

        delete: (url, config = {
            headers: {
                'Authorization': localStorage.getItem("Authorization"),
            }
        }) => {
            axios.delete(url, config)
                .then((response) => {
                    return response.data
                })
                .catch(async () => {
                    await LoginApi()
                    axios.delete(url, config)
                        .then((response) => {
                            return response.data
                        })
                        .catch(() => {
                            document.cookie = ""
                            localStorage.removeItem("Authorization")
                            localStorage.removeItem("username")
                            localStorage.removeItem("password")
                            localStorage.removeItem("id")
                            window.location = '/'
                        })
                })
        },

        post: (url, body, config = {
            headers: {
                'Authorization': localStorage.getItem("Authorization"),
            }
        }) => {
            axios.post(url, body, config)
                .then((response) => {
                    return response.data
                })
                .catch(async () => {

                    await LoginApi()
                    axios.post(url, body, config)
                        .then((response) => {
                            return response.data
                        })
                        .catch(() => {
                            document.cookie = ""
                            localStorage.removeItem("Authorization")
                            localStorage.removeItem("username")
                            localStorage.removeItem("password")
                            localStorage.removeItem("id")
                            window.location = '/'
                        })
                })
        },

        put: (url, body, config = {
            headers: {
                'Authorization': localStorage.getItem("Authorization"),
            }
        }) =>
            axios.put(url, body, config)
                .then((response) => {
                    return response.data
                })
                .catch(async () => {
                    await LoginApi()
                    axios.put(url, body, config)
                        .then((response) => {
                            return response.data
                        })
                        .catch(() => {
                            document.cookie = ""
                            localStorage.removeItem("Authorization")
                            localStorage.removeItem("username")
                            localStorage.removeItem("password")
                            localStorage.removeItem("id")
                            window.location = '/'
                        })
                })

    }
}

export default api(axiosInstance);