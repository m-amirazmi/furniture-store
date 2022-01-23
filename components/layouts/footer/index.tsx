import Link from "next/link";
import Newsletter from "./newsletter";
import styles from "./style.module.css";

const Footer: React.FC = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.subcontainer}>
					<div className={styles.linkscol}>
						<h5>About</h5>
						<ul>
							<li>About us</li>
							<li>Press center</li>
							<li>Our magazine</li>
							<li>Our group</li>
							<li>Work with us</li>
						</ul>
					</div>
					<div className={styles.linkscol}>
						<h5>Shopping</h5>
						<ul>
							<li>brand catalog</li>
							<li>Discount codes</li>
							<li>Furniture</li>
							<li>Sofa</li>
							<li>Chair</li>
						</ul>
					</div>
					<div className={styles.linkscol}>
						<h5>Help</h5>
						<ul>
							<li>FAQ</li>
							<li>Privacy policy</li>
							<li>Support</li>
							<li>Contact</li>
						</ul>
					</div>
					{/* <div className={styles.cta}>
						<Newsletter />
					</div> */}
				</div>
			</div>
			<div className={styles.copyrightcontainer}>
				<div className={styles.copyrightsubcontainer}>
					<div className={styles.privacyterms}>
						<p>Privacy policy</p>
						<p>Terms &amp; Conditions</p>
					</div>
					<p>©2022 Merazmi Web Agency</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
