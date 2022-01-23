import styles from "./style.module.css";

const Listing: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<p className="subtitle">All products</p>
				<p>(237 items)</p>
				<p>Sort by: Featured</p>
			</div>
		</div>
	);
};

export default Listing;
