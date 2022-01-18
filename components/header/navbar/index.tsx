import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const Navbar: React.FC = () => {
	return (
		<div className={styles.maincontainer}>
			<div className={styles.container}>
				<div>
					<Image src="/assets/images/logo.svg" alt="Logo" width={122} height={32} />
				</div>
				<div>
					<Link href="/">
						<a>
							<p className="subtitle-sm">New</p>
						</a>
					</Link>
					<Link href="/">
						<a>
							<p className="subtitle-sm">Categories</p>
						</a>
					</Link>
					<Link href="/">
						<a>
							<p className="subtitle-sm">Shop</p>
						</a>
					</Link>
					<Link href="/">
						<a>
							<p className="subtitle-sm">Blog</p>
						</a>
					</Link>

					<Link href="/">
						<a>
							<p className="subtitle-sm">Contact</p>
						</a>
					</Link>
				</div>
				<div>
					<span>
						<Image src="/assets/icons/search-solid.svg" alt="Search" width={32} height={32} />
					</span>
					<span>
						<Image src="/assets/icons/heart.svg" alt="Wishlist" width={32} height={32} />
					</span>
					<span>
						<Image src="/assets/icons/shopping-bag-solid.svg" alt="Cart" width={32} height={32} />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
