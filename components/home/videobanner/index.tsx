import Image from "next/image";
import styles from "./style.module.css";

const VideoBanner = () => {
	return (
		<div className={styles.container}>
			<div className={styles.videocontainer}>
				<Image src="/assets/images/placeholder/video.png" alt="Video" layout="fill" objectFit="cover" />
			</div>
			<div className={styles.overlay}></div>
			<div className={styles.play}>
				<Image src="/assets/icons/video/play.svg" alt="play" width={231} height={231} />
			</div>
		</div>
	);
};

export default VideoBanner;
