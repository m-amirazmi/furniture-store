import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountry, ICountryState } from "utils/interfaces";

const initialState: ICountryState = {
	countries: [],
	country: {
		id: "",
		name: "",
		rate: 0,
		currencyCode: "",
		symbol: "",
		shortCode: "",
	},
};

export const currencySlice = createSlice({
	name: "currency",
	initialState,
	reducers: {
		addAllCountries(state, action: PayloadAction<ICountry[]>) {
			if (action.payload.length === 0) return;
			state.countries = action.payload;
		},
		addCountry(state, action: PayloadAction<string>) {
			const findCountry = state.countries.find((c) => c.shortCode === action.payload);
			if (findCountry) state.country = findCountry;
		},
	},
});

export const { addAllCountries, addCountry } = currencySlice.actions;
