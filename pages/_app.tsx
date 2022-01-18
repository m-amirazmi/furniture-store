import "public/assets/styles/main.css";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import { StoreFrontLayout } from "../components/layouts/StoreFront";
import { Provider } from "react-redux";
import { store } from "redux/store";
import axios from "axios";
import { IApp } from "utils/interfaces";

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
	const { data } = await axios.get("http://ip-api.com/json/");
	return { ...appProps, countryCode: data.countryCode.toLowerCase() };
};
