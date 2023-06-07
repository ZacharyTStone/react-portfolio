import React, { useState, useRef, useEffect } from "react";
import ambient from "../audio/ambient2.mp3";
import { useAppContext } from "../context/appContext";

const BackgroundAudio = () => {
	const { useAudio } = useAppContext();

	const audioRef = useRef(null);

	useEffect(() => {
		if (useAudio) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [useAudio]);

	return (
		<div>
			<audio ref={audioRef} loop>
				<source src={ambient} type="audio/mpeg" />
			</audio>
		</div>
	);
};

export default BackgroundAudio;
