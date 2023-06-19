import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/appContext";

const Intro = () => {
	const { useAudio, setAudioPreference, setAcceptApp } = useAppContext();
	const { t } = useTranslation();

	useEffect(() => {
		// Lock scroll when the component is mounted
		document.body.style.overflow = "hidden";

		// Unlock scroll when the component is unmounted
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	const handleAudioChange = () => {
		setAudioPreference(!useAudio);
	};

	const handleAcceptApp = () => {
		setAcceptApp(true);
	};

	return (
		<Container>
			<Title id="special-1">{t("intro.header")}</Title>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "8px",
				}}
			>
				<SubTitle>{t("intro.enableAudio")}</SubTitle>
				<StyledInput
					type="checkbox"
					checked={useAudio}
					onChange={handleAudioChange}
				/>
			</div>
			<Button onClick={handleAcceptApp}>{t("intro.accept")}</Button>
		</Container>
	);
};

export default Intro;

const StyledInput = styled.input`
	position: relative;
	width: 32px;
	min-width: 32px;
	min-height: 32px;
	height: 32px;
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	outline: none;
	border-radius: 4%;
	border: 1px solid var(--primary-color);
	background-color: var(--off-white);
	transition: background-color 0.3s ease-in-out;

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 16px;
		height: 16px;
		border-radius: 4%;
		background-color: var(--secondary-color);
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	&:checked {
		background-color: var(--secondary-color);
	}

	&:checked::before {
		opacity: 1;
	}
`;

const Button = styled(motion.button)`
	background-color: var(--primary-color);
	color: var(--off-white);
	border: none;
	padding: 12px 24px;
	border-radius: 16px;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 18px;
	font-family: "Roboto", sans-serif;
	text-decoration: none;
	border: 1px solid var(--secondary-color);
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: var(--secondary-color);
		color: var(--primary-color);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	&:active {
		transform: translateY(0);
		box-shadow: none;
	}
`;

const Title = styled(motion.h1)`
	font-size: 3rem;
	font-family: "Rubik", sans-serif;
	font-weight: 400;
	margin: 0;
	text-transform: uppercase;
	transition: opacity 250ms ease;
	opacity: 0.5;
	color: black;
	overflow-wrap: break-word;
	word-break: break-word;
	max-width: 100%;
	text-align: center;
`;

const SubTitle = styled(motion.h5)`
	font-size: 1rem;
	font-family: "Rubik", sans-serif;
	margin: 0;
	text-transform: uppercase;
	opacity: 0.5;
	color: var(--off-white);
	overflow-wrap: break-word;
	word-break: break-word;
	max-width: 100%;
`;

const Container = styled(motion.div)`
	z-index: 999;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	height: 100svh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	flex-direction: column;
	gap: 16px;
	/* padding: 40px; */
	background-color: var(--black);

	.word {
		font-size: 1.3rem;
		font-family: "Rubik", sans-serif;
		font-weight: 400;
		margin: 0;
		text-transform: uppercase;
		transition: opacity 250ms ease;
		opacity: 0.5;
		color: black;
	}

	.word-small {
		font-size: 0.25rem;
		font-family: "Rubik", sans-serif;
		font-weight: 400;
		margin: 0;
		text-transform: uppercase;
		transition: opacity 250ms ease;
		opacity: 0.5;
		color: var(--off-white);
	}

	#special-1 {
		opacity: 1 !important;
		text-shadow: none !important;
		color: var(--off-white) !important;
	}
`;

export const LogoContainer = styled(motion.div)`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 100px;
`;

export const Logo = styled(motion.svg)`
	position: absolute;
`;
