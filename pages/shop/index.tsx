import Shop from "components/shop";
import { NextPage } from "next";
import Head from "next/head";
import styles from "./style.module.css";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Shop | Bisum</title>
			</Head>
			<main className={styles.container}>
				<Shop />
			</main>
		</>
	);
};

export default Home;
