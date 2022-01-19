import Link from "next/link";
import { INavItemProps } from "utils/interfaces";

const NavItem: React.FC<INavItemProps> = ({ route }) => {
	const query = route.query && { categories: route.query };

	return (
		<Link href={{ pathname: route.path, query }}>
			<a>
				<p className="subtitle-sm">{route.name}</p>
			</a>
		</Link>
	);
};

export default NavItem;
