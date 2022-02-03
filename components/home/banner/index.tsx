import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const Banner: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgcontainer}>
				<Image src="/assets/images/furnitures/banner.png" alt="Image Banner" layout="fill" objectFit="cover" />
			</div>
			<div className={styles.content}>
				<h2>Created Furniture</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
				<Link href="/">
					<a className={styles.button}>DISCOVER NOW</a>
				</Link>
			</div>
		</div>
	);
};

export default Banner;
