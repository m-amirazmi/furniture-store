import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const CollectionBanner: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<div>
					<div className={styles.leftitemtop}>
						<h4>Office Gaming Chairs</h4>
						<p>Work &amp; Play With Best Chairs</p>
						<Link href="/shop?collection=chair">
							<a>View more</a>
						</Link>
						<div className={styles.img}>
							<Image src="/assets/images/furnitures/chair1.png" alt="Promises Left Top" width={160} height={200} objectFit="contain" />
						</div>
					</div>
					<div className={styles.leftitembottom}>
						<h4>Dinner Chair Available</h4>
						<p>Eat Comfortably With Our Chairs</p>
						<Link href="/shop?collection=chair">
							<a>View more</a>
						</Link>
						<div className={styles.img}>
							<Image src="/assets/images/furnitures/chair2.png" alt="Promises Left Top" width={172} height={190} objectFit="contain" />
						</div>
					</div>
				</div>
				<div className={styles.rightitem}>
					<h4>Vintage Closet To Buy</h4>
					<p>Get Our Latest Closet Now!</p>
					<Link href="/shop?collection=closet">
						<a>View more</a>
					</Link>
					<div className={styles.img}>
						<Image src="/assets/images/furnitures/closet1.png" alt="Promises Left Top" width={370} height={350} objectFit="contain" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CollectionBanner;
