import { useCountry } from "hooks/useCountry";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "utils/interfaces";
import { withcommas } from "utils/withcommas";
import styles from "./style.module.css";

const FeaturedProducts: React.FC = () => {
	const { country } = useCountry();
	const [showHover, setShowHover] = useState<number | string>(0);

	const handleProductHover = (id: number | string) => setShowHover(id);

	const renderProduct = ({ pid, name, price, isFeatured, isNew, discountRate }: Product): JSX.Element => {
		return (
			<div className={styles.product} onMouseOver={() => handleProductHover(pid)}>
				<Image src="/assets/images/placeholder/featuredproduct.png" alt="Featured" width="270px" height="345px" objectFit="contain" />
				<div className={styles.colors}>
					<div>
						<Image src="/assets/icons/featured/blueselected.svg" alt="Selected" width="16px" height="16px" />
					</div>
					<div>
						<Image src="/assets/icons/featured/blue.svg" alt="Selected" width="16px" height="16px" />
					</div>
					<div>
						<Image src="/assets/icons/featured/pink.svg" alt="Selected" width="16px" height="16px" />
					</div>
				</div>
				<div className={styles.title}>
					<p className="subtitle-sm">{name}</p>
				</div>
				<div className={styles.price}>
					<p className="subtitle-sm">
						{discountRate && (
							<span>
								{country.symbol} {withcommas(price * country.rate * discountRate)}
							</span>
						)}
						<span className={discountRate ? styles.discount : styles.number}>
							{country.symbol} {withcommas(price * country.rate)}
						</span>
					</p>
				</div>
				{discountRate && <div className={styles.discountTag}>{discountRate * 100}%</div>}
				{(isFeatured || isNew) && <div className={styles.tag}>{isFeatured ? "Featured" : isNew && "New"}</div>}
				{showHover === pid && (
					<div className={styles.hovericons}>
						<div>
							<Image src="/assets/icons/featured/search-plus-solid.svg" alt="Zoom" width="32px" height="32px" />
						</div>
						<div>
							<Image src="/assets/icons/featured/shopping-bag-solid.svg" alt="Zoom" width="32px" height="32px" />
						</div>
						<div>
							<Image src="/assets/icons/featured/heart.svg" alt="Zoom" width="32px" height="32px" />
						</div>
					</div>
				)}
			</div>
		);
	};

	return (
		<div className={styles.container}>
			<div>
				<h2>Featured Products</h2>
			</div>
			<div className={styles.products}>
				{renderProduct({ pid: 1, name: "Eliot Reversible Sectional", price: 2259 })}
				{renderProduct({ pid: 2, name: "Vita Lounge Chair", price: 2259, isFeatured: true, discountRate: 0.44 })}
				{renderProduct({ pid: 3, name: "Sarno Dining Chair", price: 2259 })}
				{renderProduct({ pid: 4, name: "Vita Lounge Chair", price: 2259 })}
				{renderProduct({ pid: 5, name: "Eliot Reversible Sectional", price: 2259 })}
				{renderProduct({ pid: 6, name: "Vita Lounge Chair", price: 2259 })}
				{renderProduct({ pid: 7, name: "Sarno Dining Chair", price: 2259, isNew: true })}
				{renderProduct({ pid: 8, name: "Vita Lounge Chair", price: 2259 })}
				<div className={styles.buttonContainer}>
					<Link href="/">
						<a className={styles.button}>VIEW ALL</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;
