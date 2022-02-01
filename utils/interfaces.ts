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

export interface BlogPost {
	title: string;
}

export interface IProduct {
	_id: string;
	name: string;
	price: number;
	discount: number;
	isFeatured: boolean;
	isNew: boolean;
	category: string;
	quantity: number;
	description: string;
	sku: string;
	vendor: string;
	image: {
		url: string;
		width: number;
		height: number;
		size: number;
		sizeKB: number;
		sizeMB: number;
	};
	createdAt: string;
}
export interface IFeaturedProductsProps {
	products: IProduct[];
}

export interface IHomeProps {
	products: IProduct[];
	featuredProducts: IProduct[];
	featuredCollections: ICollection[];
}

export interface ICollection {
	name: string;
	isFeatured: boolean;
	image: {
		url: string;
		width: number;
		height: number;
		size: number;
		sizeKB: number;
		sizeMB: number;
	};
	createdAt: string;
	slug?: string;
}

export interface IGetFeatured {
	data: IProduct[] & ICollection[];
	count: number;
}

export interface IFeaturedCollectionsProps {
	collections: ICollection[];
}
