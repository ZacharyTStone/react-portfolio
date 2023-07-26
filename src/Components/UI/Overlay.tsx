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

	const logoColors: string[] = OVERLAY_COLORS.map((baseColor) =>
		getRandomColor(baseColor)
	);

	const containerAnimation = useAnimation(); // New animation state

	useEffect(() => {
		const divSequence = async (number: number) => {
			const currentAnimation = divAnimations[number - 1];

			// Animation 1: Scale Animation
			await currentAnimation.start({ scale: 0 });
			await currentAnimation.start({ scale: 2 });
			await currentAnimation.start({ scale: 1 });

			// // Animation 2: Random Move Animation 1
			// await currentAnimation.start({
			// 	x: (Math.random() * 50 - 60) * (Math.random() > 0.5 ? 1 : -1),
			// 	y: (Math.random() * 100 - 50) * (Math.random() > 0.5 ? 1 : -1),
			// 	transition: {
			// 		duration: 0.75,
			// 		ease: "easeInOut",
			// 	},
			// });

			// // Animation 3: Random Move Animation 2
			// await currentAnimation.start({
			// 	x: (Math.random() * 50 - 60) * (Math.random() > 0.5 ? 1 : -1),
			// 	y: (Math.random() * 100 - 50) * (Math.random() > 0.5 ? 1 : -1),
			// 	transition: {
			// 		duration: 0.75,
			// 		ease: "easeInOut",
			// 	},
			// });

			// Animation 4: Horizontal Move Animation
			await currentAnimation.start({
				x:
					number === 1
						? -75
						: number === 2
						? -25
						: number === 3
						? 25
						: number === 4
						? 75
						: 0,
				y: 0,
				transition: {
					duration: 1,
					ease: "easeInOut",
				},
			});

			// Animation 5: Rotate and Move to Center Animation
			await currentAnimation.start({
				rotate: 180,
				x: 0,
				y: 0,
				transition: {
					duration: 2,
					ease: "easeInOut",
				},
			});

			// Animation 6: Shrink Animation
			await currentAnimation.start({
				scale: 0,
				transition: {
					duration: 0.7 + Math.random() * 0.3,
					ease: "easeInOut",
				},
			});
		};

		const startAnimations = async () => {
			await Promise.all(
				divAnimations.map((_, index) => divSequence(index + 1))
			);

			// Animation 7: Fade Out Animation
			await containerAnimation.start({
				opacity: 0,
				transition: { duration: 0.5 },
			});
		};

		startAnimations();
	}, []);

	useLockScroll();

	return (
		<Container className="fade-in-on-mount" animate={containerAnimation}>
			<OverlaySvg
				xmlns="http://www.w3.org/2000/svg"
				// should be a rectangle
				width="100%"
				height="100%"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<OverlayLine
					initial={{ pathLength: 0, opacity: 0.3 }}
					animate={{ pathLength: 1, opacity: 1 }}
					transition={{ duration: 4 }}
					// go around the viewport clockwise from top left to top right to bottom right to bottom left
					d="M 0 0 L 100 0 L 100 100 L 0 100 Z"
				/>
			</OverlaySvg>
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

export const Container = styled(motion.div)<{ animate?: any }>`
	z-index: 999;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background-color: "var(--secondary-color)";

	/* Add animate prop to control opacity */
	opacity: ${(props) => props?.animate?.opacity ?? 1};
`;

const OverlaySvg = styled.svg`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
`;

const OverlayLine = styled(motion.path)`
	stroke: var(--secondary-color);
	stroke-width: 2;
	fill: none;
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
