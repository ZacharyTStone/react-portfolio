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
	return (
		<Container>
			<Title className="word " id="special-1">
				{" "}
				{t("intro.header")}
			</Title>
			<div
				style={{
					display: "flex",
					gap: "8px",
					alignItems: "center",
					width: "fit-content",
				}}
			>
				<h2
					className="word-small"
					style={{
						textTransform: "uppercase",
						// wrap
						whiteSpace: "pre-wrap",
						// overflow
						overflowWrap: "break-word",
						// word break
						wordBreak: "break-word",
					}}
				>
					{t("intro.enableAudio")}
				</h2>

				<StyledInput
					type="checkbox"
					checked={useAudio}
					onChange={() => setAudioPreference(!useAudio)}
				/>
			</div>
			<Button onClick={() => setAcceptApp(true)}>{t("intro.accept")}</Button>
		</Container>
	);
};

export default Intro;

const StyledInput = styled.input`
	position: relative;
	width: 32px;
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
	font-size: 100px;
	font-weight: 900;
	color: var(--off-white);
	text-align: center;
	text-transform: uppercase;
	text-shadow: -1px -1px 0 var(--off-white), 1px -1px 0 var(--off-white);

	font-size: clamp(1.3rem, 6.5vw, 5rem);
	font-family: "Rubik", sans-serif;
	font-weight: 400;
	margin: 0rem;
	text-transform: uppercase;
	transition: opacity 250ms ease;
	opacity: 0.5;
	text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
		1px 1px 0 var(--off-white);
	color: black;
`;

export const Container = styled(motion.div)`
	z-index: 999;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	height: 100svh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	flex-direction: column;

	gap: 16px;
	padding: 8px;
	background-color: "var(--secondary-color)";

	.word {
		font-size: clamp(1.3rem, 6.5vw, 5rem);
		font-family: "Rubik", sans-serif;
		font-weight: 400;
		margin: 0rem;
		text-transform: uppercase;
		transition: opacity 250ms ease;
		opacity: 0.5;
		text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
			1px 1px 0 var(--off-white);
		color: black;
	}

	.word-small {
		font-size: clamp(0.25rem, 6.5vw, 1.25rem);
		font-family: "Rubik", sans-serif;
		font-weight: 400;
		margin: 0rem;
		text-transform: uppercase;
		transition: opacity 250ms ease;
		opacity: 0.5;
		/* text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
			1px 1px 0 var(--off-white); */
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
