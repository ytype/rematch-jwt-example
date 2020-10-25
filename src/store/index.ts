import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from '../models/index'

import createPersistPlugin from '@rematch/persist'
import storage from 'redux-persist/lib/storage'

const persistPlugin:any = createPersistPlugin({
	key: 'root',
	storage,
	version: 2,
	whitelist: ['user'],
})

export const store = init({
	models,
	plugins: [persistPlugin],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>