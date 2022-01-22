import Image from "next/image";
import styles from "./style.module.css";

const Hero: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.heroimg}>
				<div className={styles.bannerweb}>
					<Image src="https://via.placeholder.com/1600x600.png?text=1600x600" alt="placeholder" layout="fill" objectFit="cover" />
				</div>
				<div className={styles.bannermob}>
					<Image src="https://via.placeholder.com/600x600.png?text=600x600" alt="placeholder" layout="fill" objectFit="cover" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
