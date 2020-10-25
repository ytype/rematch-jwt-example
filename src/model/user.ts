import { createModel } from '@rematch/core'
import { useState } from 'react'
import { RootModel } from './index'

export type userState = {
    jwt: string,
    id: string,
    username: string
}

export const user = createModel<RootModel>()({
	state: {
        jwt: '',
        id: '',
        username: ''
    },
	reducers: {
		setUser: (state: userState, payload: userState) => {
            return payload
        },
	},
	effects: (dispatch) => {
		const { dolphins } = dispatch
		return {
			async incrementAsync(): Promise<void> {
				await delay(500)
				dolphins.increment(1)
			},
		}
	},
})