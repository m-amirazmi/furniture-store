import axios from "axios";
import countries from "data/countries.json";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllCountries, addCountry } from "redux/features/currencySlice";
import { RootState } from "redux/store";

export const useCountry = (countryCode: string = "") => {
	const dispatch = useDispatch();
	const country = useSelector((state: RootState) => state.currencies);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		dispatch(addAllCountries(countries));
	}, [dispatch]);

	useEffect(() => {
		setLoading(true);
		if (countryCode && countryCode !== "") dispatch(addCountry(countryCode));
		else {
			const fetchCountryClient = async () => {
				const { data } = await axios.get("/api/country");
				dispatch(addCountry(data.data.country_code.toLowerCase()));
				setLoading(false);
			};
			fetchCountryClient();
		}
	}, [countryCode, dispatch]);

	const setCountry = (code: string) => {
		if (!code) return { message: "Please pass the country code (eg: my)" };
		dispatch(addCountry(code.toLowerCase()));
	};

	return { country: country.country, setCountry, loading };
};
