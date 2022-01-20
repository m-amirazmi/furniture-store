import Image from "next/image";
import styles from "./style.module.css";

const Hero: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.heroimg}>
				<Image src="/assets/images/placeholder/hero.png" alt="placeholder" layout="fill" objectFit="cover" />
			</div>
		</div>
	);
};

export default Hero;
