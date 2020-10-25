import axios from 'axios'

type loginParams = {
    email: string,
    password: string
}

export const login = async ({email, password}:loginParams) => {
    // fake Login
    const username = 
    setTimeout(function() {
        return {
            responseCode: 200,
            jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            id: 1,
            username: email.split('@')[0]
        }
    }, 1000)
}