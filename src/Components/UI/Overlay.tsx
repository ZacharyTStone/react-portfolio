import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLockScroll } from "../../utils/hooks";
import { getRandomColor } from "../../utils/misc";
import { OVERLAY_COLORS } from "../../utils/constants";

export default function Index() {
	const divAnimations = [
		useAnimation(),
		useAnimation(),
		useAnimation(),
		useAnimation(),
	];

	const logoColors: string[] = OVERLAY_COLORS.map((baseColor) => getRandomColor(baseColor));

	useEffect(() => {
		const divSequence = async (number: number) => {
			const currentAnimation = divAnimations[number - 1];
			await currentAnimation.start({ scale: 0 });
			await currentAnimation.start({ scale: 2 });
			await currentAnimation.start({ scale: 1 });
			await currentAnimation.start({
				x: (Math.random() * 50 - 60) * (Math.random() > 0.5 ? 1 : -1),
				y: (Math.random() * 100 - 50) * (Math.random() > 0.5 ? 1 : -1),

				transition: {
					duration: 0.75,
					ease: "easeInOut",
				},
			});
			await currentAnimation.start({
				x: (Math.random() * 50 - 60) * (Math.random() > 0.5 ? 1 : -1),
				y: (Math.random() * 100 - 50) * (Math.random() > 0.5 ? 1 : -1),

				transition: {
					duration: 0.75,
					ease: "easeInOut",
				},
			});
			await currentAnimation.start({
				x:
					number === 1
						? -14
						: number === 2
						? -6
						: number === 3
						? 0
						: number === 4
						? 6
						: number === 5
						? 14
						: 0,

				y: 0,
				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},
			});
			await currentAnimation.start({
				//rotate 180 degrees
				rotate: 180,
				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},

				// move to the center of the screen
				x: 0,
				y: 0,
			});
			await currentAnimation.start({
				// get smaller and smaller until it's gone into the center of the screen
				scale: 0,
				transition: {
					duration: 0.5 + Math.random() * 0.5,
					ease: "easeInOut",
				},
			});
		};

		divSequence(1);
		divSequence(2);
		divSequence(3);
		divSequence(4);
	}, []);

    useLockScroll();

	return (
		<Container className="fade-in-on-mount">
			{divAnimations.map((animation, index) => (
				<LogoContainer
					animate={animation}
					initial={{
						scale: 0,
						rotate: 45,
						x: index === 0 ? -10 : index === 1 ? -20 : 10,
					}}
					key={index}
				>
					<Logo
						xmlns="http://www.w3.org/2000/svg"
						width="71"
						height="70"
						viewBox="0 0 71 70"
					>
						<g
							id="Rectangle_1"
							data-name="Rectangle 1"
							fill="none"
							stroke={logoColors[index]}
							strokeWidth="4"
						>
							<rect width="71" height="70" stroke="none" />
							<rect x="2" y="2" width="67" height="66" fill="none" />
						</g>
					</Logo>
				</LogoContainer>
			))}
		</Container>
	);
}

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
	background-color: "var(--secondary-color)";
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
