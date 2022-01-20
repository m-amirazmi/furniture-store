import styles from "./style.module.css";
import promises from "data/promises.json";
import Image from "next/image";

const Promises: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				{promises.map((p) => (
					<div key={p.id} className={styles.item}>
						<div className={styles.icon}>
							<Image src={`/assets/icons/promises/${p.icon}`} alt={p.title} layout="fill" objectFit="contain" objectPosition="center" />
						</div>
						<div>
							<h5>{p.title}</h5>
							<p>{p.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Promises;
