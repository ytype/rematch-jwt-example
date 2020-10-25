import axios from 'axios'

type loginParams = {
    username: string,
    password: string
}


export const loginApi = async ({username, password}:loginParams):Promise<string> => {
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

    const response = await axios(config)
    return JSON.stringify(response.data.access_token)
}