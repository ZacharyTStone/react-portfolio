import React, { useEffect, useRef } from "react";
import { useAppContext } from "../context/appContext";
// @ts-ignore
import boop from "./boop.mp3";

{
	/* may be useful in the future for now it's just used in this componeent */
}
const useAudioOnClick = (
	audioRef: React.RefObject<HTMLAudioElement>,
	useAudio: boolean
) => {
	useEffect(() => {
		const handleClick = () => {
			if (useAudio && audioRef.current) {
				audioRef.current.currentTime = 0; // Reset the audio playback to the beginning
				audioRef.current.play();
			}
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [useAudio, audioRef]);
};

const AudioOnClick = () => {
	const { useAudio } = useAppContext();
	const audioRef = useRef<HTMLAudioElement>(null);

	useAudioOnClick(audioRef, useAudio);

	return (
		<div>
			<audio ref={audioRef}>
				<source src={boop} type="audio/mpeg" />
			</audio>
		</div>
	);
};

export default AudioOnClick;
