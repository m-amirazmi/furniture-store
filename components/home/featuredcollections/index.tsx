import Image from "next/image";
import Link from "next/link";
import { IFeaturedCollectionsProps } from "utils/interfaces";
import styles from "./style.module.css";

const FeaturedCollections: React.FC<IFeaturedCollectionsProps> = ({ collections }) => {
	console.log();
	if (collections.length === 0) return null;
	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<h2>Featured Collections</h2>
				<div className={styles.collectioncontainer}>
					<div className={styles.collection1}>
						<div className={styles.collection1name}>
							<h3>The Best {collections[0].name}</h3>
							<Link href={`/shop?collection=${collections[0].slug}`}>
								<a>View Collection</a>
							</Link>
						</div>

						<div className={styles.collection1bg}>
							<div className={styles.collection1img}>
								<Image src={collections[0].image.url} alt="FC1" width={380} height={366} objectFit="contain" />
							</div>
						</div>
					</div>
					<div className={styles.collection2}>
						<div className={styles.collection2name}>
							<h3>Storage {collections[1].name}</h3>
							<Link href={`/shop?collection=${collections[1].slug}`}>
								<a>View Collection</a>
							</Link>
						</div>
						<div className={styles.collection2bg}>
							<div className={styles.collection2img}>
								<Image src={collections[1].image.url} alt="FC2" width={290} height={420} objectFit="contain" />
							</div>
						</div>
					</div>

					<div className={styles.collection3}>
						<div className={styles.collection3name}>
							<h3>Goodnight {collections[2].name}</h3>
							<Link href={`/shop?collection=${collections[2].slug}`}>
								<a>View Collection</a>
							</Link>
						</div>
						<div className={styles.collection3bg}>
							<div className={styles.collection3img}>
								<Image src={collections[2].image.url} alt="FC3" width={363} height={322} objectFit="contain" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedCollections;
