import { useNavigation } from "hooks/useNavigation";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./navitem";
import styles from "./style.module.css";

const Navbar: React.FC = () => {
	const { routes } = useNavigation();

	return (
		<div className={styles.maincontainer}>
			<div className={styles.container}>
				<Link href="/">
					<a>
						<Image src="/assets/images/logo1.svg" alt="Logo" width={214} height={30} />
					</a>
				</Link>
				<div>
					{routes.map((route) => (
						<NavItem key={route.id} route={route} />
					))}
				</div>
				<div>
					<span>
						<Image src="/assets/icons/search-solid.svg" alt="Search" width={32} height={32} />
					</span>
					<span>
						<Image src="/assets/icons/heart.svg" alt="Wishlist" width={32} height={32} />
					</span>
					<span>
						<Image src="/assets/icons/shopping-bag-solid.svg" alt="Cart" width={32} height={32} />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
