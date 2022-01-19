import { AppProps } from "next/app";

export interface ICountry {
	id: string;
	name: string;
	rate: number;
	currencyCode: string;
	symbol: string;
	shortCode: string;
}

export interface ICountryState {
	countries: ICountry[];
	country: ICountry;
}

export interface IApp extends AppProps {
	countryCode: string;
}

export interface IStoreFrontProps {
	countryCode: string;
}

export interface IRoute {
	id: string;
	path: string;
	name: string;
	query?: string;
}

export interface INavItemProps {
	route: IRoute;
}
