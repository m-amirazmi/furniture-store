import Image from "next/image";
import { BlogPost } from "utils/interfaces";
import styles from "./style.module.css";

const Blogs: React.FC = () => {
	const renderPost = ({ title }: BlogPost) => {
		return (
			<div className={styles.blog}>
				<div className={styles.image}>
					<Image src="/assets/images/placeholder/blog.png" alt="blog" width={364} height={304} />
				</div>
				<div className={styles.meta}>
					<div className={styles.calendar}>
						<div>
							<Image src="/assets/icons/blogs/calendar-alt.svg" alt="calendar" width={24} height={24} />
						</div>
						<p>DEC 28, 2021</p>
					</div>

					<div className={styles.author}>
						<div>
							<Image src="/assets/icons/blogs/user.svg" alt="calendar" width={24} height={24} />
						</div>
						<p>LARA JOEW</p>
					</div>
				</div>
				<div>
					<h5>{title}</h5>
				</div>
				<div className={styles.tag}>
					<p>Furniture</p>
				</div>
			</div>
		);
	};

	return (
		<div className={styles.container}>
			<h2>Latest Blogs</h2>
			<div className={styles.blogs}>
				{renderPost({ title: "Pure is the most furniture." })}
				{renderPost({ title: "Minimalism in your room." })}
				{renderPost({ title: "Build up your kitchen." })}
			</div>
		</div>
	);
};

export default Blogs;
