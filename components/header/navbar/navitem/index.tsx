import Link from "next/link";
import { INavItemProps } from "utils/interfaces";
import styles from "./style.module.css";

const NavItem: React.FC<INavItemProps> = ({ route }) => {
	const query = route.query && { categories: route.query };

	return (
		<div className={styles.container}>
			<Link href={{ pathname: route.path, query }}>
				<a className={styles.item}>
					<p className="subtitle-sm">{route.name}</p>
				</a>
			</Link>
			<div className={styles.hoverline}></div>
		</div>
	);
};

export default NavItem;
