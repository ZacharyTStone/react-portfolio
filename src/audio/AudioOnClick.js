import { useEffect, useRef } from "react";
import boop from "./boop.mp3";
import { useAppContext } from "../context/appContext";

const AudioOnClick = () => {
	const { useAudio } = useAppContext();
	const audioRef = useRef(null);

	useEffect(() => {
		const handleClick = () => {
			if (useAudio) {
				audioRef.current.currentTime = 0; // Reset the audio playback to the beginning
				audioRef.current.play();
			}
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
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

export default AudioOnClick;
