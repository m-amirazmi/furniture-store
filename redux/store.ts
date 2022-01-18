import { configureStore } from "@reduxjs/toolkit";
import { currencySlice } from "./features/currencySlice";

export const store = configureStore({
	reducer: {
		currencies: currencySlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
