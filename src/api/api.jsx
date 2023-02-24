import axios from "axios";
import LoginApi from "./LoginApi";

const axiosParams = {
    baseURL: 'http://localhost:8090/api/v1/'
    // baseURL: 'https://catfact.ninja/'
}

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {

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
        get: async (url, config = {
            headers: {
                'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'),
                'Authorization': localStorage.getItem("Authorization"),
            }
        }) =>
            await axios.get(url, config)
                .then((response) => {
                    return response.data
                })

                .catch(async () => {
                    await axios.post("http://localhost:8090/login",
                        {username: "asd", password: "asd"}, {
                            withCredentials: true,
                            headers: {
                                'Access-Control-Allow-Headers': ['Set-Cookie', 'Content-Type', "x-xsrf-token"],
                            }
                        }
                    ).then((response) => {


                    }).catch((error) => {


                    })

                    await LoginApi()
                    await axios.get(url, config)
                        .then((response) => {
                            return response.data
                        })
                        .catch(() => {
                            document.cookie = ""
                            localStorage.removeItem("Authorization")
                            // window.location = '/'
                        })
                }),

        delete: (url, config = {
            headers: {
                'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'),
                'Authorization': localStorage.getItem("Authorization"),
            }
        }) => {
            axios.delete(url, config)
                .then((response) => {
                    return response.data
                })
                .catch(async () => {
                    axios.post("http://localhost:8090/login",
                        {username: "asd", password: "asd"}, {
                            withCredentials: true,
                            headers: {
                                'Access-Control-Allow-Headers': ['Set-Cookie', 'Content-Type', "x-xsrf-token"],
                            }
                        }
                    ).then((response) => {


                    }).catch((error) => {


                    })
                    await LoginApi()
                    axios.delete(url, config)
                        .then((response) => {
                            return response.data
                        })
                        .catch(() => {
                            document.cookie = ""
                            localStorage.removeItem("Authorization")
                            window.location = '/'
                        })
                })
        },

        post: (url, body, config = {
            headers: {
                'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'),
                'Authorization': localStorage.getItem("Authorization"),
            }
        }) => {
            axios.post(url, body, config)
                .then((response) => {
                    return response.data
                })
                .catch(async () => {
                    axios.post("http://localhost:8090/login",
                        {username: "asd", password: "asd"}, {
                            withCredentials: true,
                            headers: {
                                'Access-Control-Allow-Headers': ['Set-Cookie', 'Content-Type', "x-xsrf-token"],
                            }
                        }
                    ).then((response) => {


                    }).catch((error) => {


                    })

                    await LoginApi()
                    axios.post(url, body, config)
                        .then((response) => {
                            return response.data
                        })
                        .catch(() => {
                            document.cookie = ""
                            // localStorage.removeItem("Authorization")
                            // window.location = '/'
                        })
                })
        },

        put: (url, body, config = {
            headers: {
                'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'),
                'Authorization': localStorage.getItem("Authorization"),
            }
        }) =>
            axios.put(url, body, config)
                .then((response) => {
                    return response.data
                })
                .catch(async () => {
                    axios.post("http://localhost:8099/login",
                        {username: "asd", password: "asd"}, {
                            withCredentials: true,
                            headers: {
                                'Access-Control-Allow-Headers': ['Set-Cookie', 'Content-Type', "x-xsrf-token"],
                            }
                        }
                    ).then((response) => {


                    }).catch((error) => {


                    })
                    await LoginApi()
                    axios.put(url, body, config)
                        .then((response) => {
                            return response.data
                        })
                        .catch(() => {
                            // document.cookie = ""
                            // localStorage.removeItem("Authorization")
                            // window.location = '/'
                        })
                })

    }
}

export default api(axiosInstance);