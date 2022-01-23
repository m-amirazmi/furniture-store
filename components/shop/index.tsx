import Filter from "./filter";
import Listing from "./listing";
import styles from "./style.module.css";

const Shop: React.FC = () => {
	return (
		<div className={styles.container}>
			<Listing />
			<Filter />
		</div>
	);
};

export default Shop;
