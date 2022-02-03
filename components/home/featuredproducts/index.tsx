import { useCountry } from "hooks/useCountry";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IFeaturedProductsProps, IProduct } from "utils/interfaces";
import { withcommas } from "utils/withcommas";
import styles from "./style.module.css";

const FeaturedProducts: React.FC<IFeaturedProductsProps> = ({ products }) => {
	const { country } = useCountry();
	const [showHover, setShowHover] = useState<number | string>(0);

	const handleProductHover = (id: number | string) => setShowHover(id);

	const renderProduct = ({ _id, name, price, isFeatured, discount, image, createdAt }: IProduct): JSX.Element => {
		const today = new Date().getTime();
		const productCreated = new Date(createdAt).getTime();
		const isNew = today - productCreated <= 2629743000;

		const totalPriceDiscount = price * country.rate * discount;
		const totalPrice = price * country.rate;

		return (
			<div key={_id} className={styles.product} onMouseOver={() => handleProductHover(_id)}>
				<Image src={image.url} alt="Featured" width="720px" height="1080px" objectFit="contain" />
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
						{discount && (
							<span>
								{country.symbol} {withcommas(totalPrice - totalPriceDiscount)}
							</span>
						)}
						<span className={discount ? styles.discount : styles.number}>
							{country.symbol} {withcommas(price * country.rate)}
						</span>
					</p>
				</div>
				{discount && <div className={styles.discountTag}>{discount * 100}%</div>}
				{isFeatured && <div className={styles.tag}>{isFeatured && "Featured"}</div>}
				{isNew && <div className={styles.newTag}>{isNew && "New"}</div>}
				{showHover === _id && (
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
				{products.length > 0 && products.map((p) => renderProduct({ ...p }))}
				<div className={styles.buttonContainer}>
					<Link href="/shop">
						<a className={styles.button}>VIEW ALL</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;
