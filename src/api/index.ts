import axios from 'axios'

type loginParams = {
    username: string,
    password: string
}

export const loginApi = async ({username, password}:loginParams) => {
    // after server on
    const data = JSON.stringify({"username":username,"password":password})

    const config:any = {
        method: 'post',
        url: 'http://127.0.0.1:5000/auth',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
    .then((response) => {
        return (JSON.stringify(response.data))
    })
    .catch((error) => {
        console.log(error)
    })
}