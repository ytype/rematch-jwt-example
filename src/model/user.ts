import { createModel } from '@rematch/core'
import { RootModel } from './index'
import { loginApi } from "../api/index"

export type loginParms = {
    username: string,
    password: string
}

export type userState = {
    jwt: string
}

export const user = createModel<RootModel>()({
	state: {
        jwt: ''
    },
	reducers: {
		setUser: (state: userState, payload: userState) => {
            return payload
        },
	},
	effects: (dispatch) => {
		return {
			async login(payload: loginParms) {
				const newUser = {
                    jwt: await loginApi(payload)
                }
				dispatch.user.setUser(newUser)
			},
		}
	},
})