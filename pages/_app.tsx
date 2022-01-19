import "public/assets/styles/main.css";
import type { AppContext } from "next/app";
import App from "next/app";
import Head from "next/head";
import { StoreFrontLayout } from "../components/layouts/StoreFront";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { IApp } from "utils/interfaces";
import NextNProgress from "nextjs-progressbar";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

export default function MyApp({ Component, pageProps }: IApp) {
	return (
		<>
			<Head>
				<title>Bisum | Welcome!</title>
			</Head>
			<NextNProgress color="rgba(255,255,255,0.7)" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
			<Provider store={store}>
				<SkeletonTheme>
					<StoreFrontLayout>
						<Component {...pageProps} />
					</StoreFrontLayout>
				</SkeletonTheme>
			</Provider>
		</>
	);
}
