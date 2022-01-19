import "public/assets/styles/main.css";
import type { AppContext } from "next/app";
import App from "next/app";
import Head from "next/head";
import { StoreFrontLayout } from "../components/layouts/StoreFront";
import { Provider } from "react-redux";
import { store } from "redux/store";
import axios from "axios";
import { IApp } from "utils/interfaces";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps, countryCode }: IApp) {
	return (
		<>
			<Head>
				<title>Bisum | Welcome!</title>
			</Head>
			<Provider store={store}>
				<StoreFrontLayout countryCode={countryCode}>
					<Component {...pageProps} />
				</StoreFrontLayout>
			</Provider>
		</>
	);
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext);
	const { data } = await axios.get("http://localhost:9100/api/country");
	return { ...appProps, countryCode: data.data.country_code.toLowerCase() };
};
