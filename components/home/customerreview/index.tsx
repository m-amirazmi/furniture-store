import Image from "next/image";
import styles from "./style.module.css";

const CustomerReview: React.FC = () => {
	return (
		<div className={styles.container}>
			<div>
				<h2>What Customer Say</h2>
				<p>The services provided by the officials was smooth and satisfactory. Products and goods delivered were up to satisfaction.</p>
			</div>
			<div className={styles.reviewcontainer}>
				<div className={styles.rating}>
					<Image src="/assets/icons/customerreview/quote.svg" alt="quote" width={40} height={29} />
					<div className={styles.stars}>
						<Image src="/assets/icons/customerreview/star-solid.svg" alt="quote" width={24} height={24} />
						<Image src="/assets/icons/customerreview/star-solid.svg" alt="quote" width={24} height={24} />
						<Image src="/assets/icons/customerreview/star-solid.svg" alt="quote" width={24} height={24} />
						<Image src="/assets/icons/customerreview/star-solid.svg" alt="quote" width={24} height={24} />
						<Image src="/assets/icons/customerreview/star-solid.svg" alt="quote" width={24} height={24} />
					</div>
				</div>
				<p className={styles.desc}>
					“I am purchasing furniture from Furnistore since the last 6 years. I love their prompt service and so far I have faced no complaints with their furniture.”
				</p>
				<div className={styles.avatar}>
					<Image src="/assets/images/person.jpeg" alt="avatar" width={80} height={80} />
					<div>
						<h5>Floyd Miles</h5>
						<p>Executive, Hypebeast</p>
					</div>
				</div>
				<div className={styles.left}>
					<Image src="/assets/icons/customerreview/angle-left-solid.svg" alt="Left" width={24} height={24} />
				</div>
				<div className={styles.right}>
					<Image src="/assets/icons/customerreview/angle-right-solid.svg" alt="Right" width={24} height={24} />
				</div>
			</div>
		</div>
	);
};

export default CustomerReview;
