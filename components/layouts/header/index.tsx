import { TopSetting } from "./topsetting";
import Navbar from "./navbar";
import styles from "./style.module.css";

export const Header: React.FC = () => {
	return (
		<div className={styles.container}>
			<TopSetting />
			<Navbar />
		</div>
	);
};
