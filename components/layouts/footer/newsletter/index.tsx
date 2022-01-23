import Image from "next/image";
import styles from "./style.module.css";

const Newsletter: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Image src="/assets/images/newsletterlogo.svg" alt="newsletter logo" width={122} height={32} />
			</div>
			<div>
				<p>Stay up to date with all the news.</p>
				<div className={styles.inputcontainer}>
					<input className={styles.input} />
					<button>SIGN UP</button>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
