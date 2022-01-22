import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const FeaturedCollections: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<h2>Featured Collections</h2>
				<div className={styles.collectioncontainer}>
					<div className={styles.collection1}>
						<div className={styles.collection1name}>
							<h3>Home Decor</h3>
							<Link href="/">
								<a>View Collection</a>
							</Link>
						</div>

						<div className={styles.collection1bg}>
							<div className={styles.collection1img}>
								<Image src="/assets/images/placeholder/featuredcollection1.png" alt="FC1" width={380} height={366} />
							</div>
						</div>
					</div>
					<div className={styles.collection2}>
						<div className={styles.collection2name}>
							<h3>Storage Furniture</h3>
							<Link href="/">
								<a>View Collection</a>
							</Link>
						</div>
						<div className={styles.collection2bg}>
							<div className={styles.collection2img}>
								<Image src="/assets/images/placeholder/featuredcollection2.png" alt="FC2" width={290} height={420} />
							</div>
						</div>
					</div>

					<div className={styles.collection3}>
						<div className={styles.collection3name}>
							<h3>HD Grey Wallpapers</h3>
							<Link href="/">
								<a>View Collection</a>
							</Link>
						</div>
						<div className={styles.collection3bg}>
							<div className={styles.collection3img}>
								<Image src="/assets/images/placeholder/featuredcollection3.png" alt="FC3" width={363} height={322} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedCollections;
