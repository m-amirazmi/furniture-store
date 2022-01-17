import "../public/assets/styles/main.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { StoreFrontLayout } from "../components/layouts/StoreFront";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>FurnitureStore | Welcome!</title>
			</Head>
			<StoreFrontLayout>
				<Component {...pageProps} />
			</StoreFrontLayout>
		</>
	);
}
