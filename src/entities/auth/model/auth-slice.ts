import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DefaultState = {
	user: null | { id: string };
}

const initialState: DefaultState = {
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, { payload }: PayloadAction<{ id: string }>) => {
			state.user = payload;
		}
	},
	extraReducers: (builder) => {
		console.log(builder)
	}
});

export const { setCredentials } = authSlice.actions;

export const authReducer = authSlice.reducer;
