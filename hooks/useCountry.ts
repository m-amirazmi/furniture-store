import axios from "axios";
import countries from "data/countries.json";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllCountries, addCountry } from "redux/features/currencySlice";
import { RootState } from "redux/store";

export const useCountry = (countryCode: string = "") => {
	const dispatch = useDispatch();
	const country = useSelector((state: RootState) => state.currencies);

	// useEffect(() => {
	// 	const fetchCountryClient = async () => {
	// 		const { data, error } = await axios.get("http://ip-api.com/json/");
	// 		console.log("HERE?", data, error);
	// 	};
	// 	fetchCountryClient();
	// }, []);

	useEffect(() => {
		dispatch(addAllCountries(countries));
	}, [dispatch]);

	useEffect(() => {
		if (countryCode && countryCode !== "") dispatch(addCountry(countryCode));
	}, [countryCode, dispatch]);

	const handleClick = (code: string) => {
		if (!code) return { message: "Please pass the country code (eg: my)" };
		dispatch(addCountry(code));
	};

	return { country: country.country, handleClick };
};
