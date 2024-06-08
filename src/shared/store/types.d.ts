import { store } from './store.ts';

declare global {
	type AppDispatch = typeof store.dispatch;

	type RootState = ReturnType<typeof store.getState>;
}
