import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const CollectionBanner: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<div>
					<div className={styles.leftitemtop}>
						<h4>20% Off On Tank Tops</h4>
						<p>20% Off On Tank Tops</p>
						<Link href="/">
							<a>View more</a>
						</Link>
						<div className={styles.img}>
							<Image src="/assets/images/placeholder/promiseslefttop.png" alt="Promises Left Top" width={160} height={220} objectFit="cover" />
						</div>
					</div>
					<div className={styles.leftitembottom}>
						<h4>Let’s Buy Lorem Ipsum</h4>
						<p>30% Off On Tank Tops</p>
						<Link href="/">
							<a>View more</a>
						</Link>
						<div className={styles.img}>
							<Image src="/assets/images/placeholder/promisesleftbottom.png" alt="Promises Left Top" width={172} height={220} objectFit="cover" />
						</div>
					</div>
				</div>
				<div className={styles.rightitem}>
					<h4>Let’s buy lorem ipsum</h4>
					<p>50% Off On Tank Tops</p>
					<Link href="/">
						<a>View more</a>
					</Link>
					<div className={styles.img}>
						<Image src="/assets/images/placeholder/promisesright.png" alt="Promises Left Top" width={431} height={428} objectFit="cover" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CollectionBanner;
