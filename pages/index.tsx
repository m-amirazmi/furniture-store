import { NextPage } from "next";
import Image from "next/image";
import styles from "./style.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.heroimg}>
				<Image src="/assets/images/placeholder/hero.png" alt="placeholder" layout="fill" />
			</div>
		</div>
	);
};

export default Home;
