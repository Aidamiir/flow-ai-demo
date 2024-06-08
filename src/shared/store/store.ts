import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '@entities/auth';

const rootReducer = combineReducers({
	auth: authReducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		const defaultMiddleware = getDefaultMiddleware();

		return defaultMiddleware.concat([]);
	},
	devTools: true
});
