import { useEffect, useRef } from "react";
import boop from "./boop.mp3";
import { useAppContext } from "../context/appContext";

const AudioOnHover = () => {
	const { useAudio } = useAppContext();
	const audioRef = useRef(null);

	useEffect(() => {
		const handleHover = () => {
			if (useAudio) {
				audioRef.current.currentTime = 0; // Reset the audio playback to the beginning
				audioRef.current.volume = 0.5; // Adjust the volume (0.0 - 1.0)
				audioRef.current.play();
			}
		};

		const handleMouseLeave = () => {
			if (useAudio) {
				audioRef.current.pause();
			}
		};

		const handleEnded = () => {
			audioRef.current.currentTime = 0; // Reset the audio playback to the beginning
		};

		const elements = document.querySelectorAll("button, input");

		elements.forEach((element) => {
			element.addEventListener("mouseenter", handleHover);
			element.addEventListener("mouseleave", handleMouseLeave);
		});

		const audioElement = audioRef.current;
		audioElement.addEventListener("ended", handleEnded);

		return () => {
			elements.forEach((element) => {
				element.removeEventListener("mouseenter", handleHover);
				element.removeEventListener("mouseleave", handleMouseLeave);
			});

			audioElement.removeEventListener("ended", handleEnded);
		};
	}, [useAudio]);

	return (
		<div>
			<audio ref={audioRef}>
				<source src={boop} type="audio/mpeg" />
			</audio>
		</div>
	);
};

export default AudioOnHover;
