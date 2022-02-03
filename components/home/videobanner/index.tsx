import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const VideoBanner = () => {
	const [play, setPlay] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const isPaused = videoRef.current?.paused;
		if (isPaused) setPlay(false);
		else setPlay(true);
	}, [videoRef.current?.paused]);

	const handlePlayVideo = ({ currentTarget }: React.MouseEvent<any>) => {
		if (currentTarget.paused) {
			currentTarget.play();
			setPlay(true);
		} else {
			currentTarget.pause();
			setPlay(false);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.videocontainer}>
				<video ref={videoRef} playsInline muted loop autoPlay className="mx-auto w-100" onClick={handlePlayVideo} src="/assets/videos/video.mp4"></video>
			</div>
			{!play && <div className={styles.overlay}></div>}
			{!play && (
				<div
					className={styles.play}
					onClick={() => {
						if (videoRef.current?.paused) {
							videoRef.current.play();
							setPlay(true);
						} else {
							videoRef.current?.pause();
							setPlay(false);
						}
					}}
				>
					<Image src="/assets/icons/video/play.svg" alt="play" width={231} height={231} />
				</div>
			)}
		</div>
	);
};

export default VideoBanner;
