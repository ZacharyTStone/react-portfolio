import React, { useState, useRef, useEffect } from "react";
// @ts-ignore
import ambient from "./ambient2.mp3";
import { useAppContext } from "../context/appContext";

const BackgroundAudio = () => {
	const { useAudio, showApp } = useAppContext();

	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		if (useAudio && audioRef.current) {
			audioRef.current.play();
		} else if (audioRef.current) {
			audioRef.current.pause();
		}
	}, [useAudio, showApp]);

	return (
		<div>
			<audio ref={audioRef} loop>
				<source src={ambient} type="audio/mpeg" />
			</audio>
		</div>
	);
};

export default BackgroundAudio;
