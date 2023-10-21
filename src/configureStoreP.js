//redux persist
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { rootReducers } from './rootReducer';
import rootSaga from './rootSaga';

//create saga middleware

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['posts','users'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducers);

// Mount it on the Store
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)