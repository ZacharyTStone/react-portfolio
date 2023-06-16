import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Index() {
	const divAnimations = [
		useAnimation(),
		useAnimation(),
		useAnimation(),
		useAnimation(),
	];

	const getRandomColor = (baseColor: string): string => {
		// Generate random variations for brightness and saturation
		const brightnessVariation = Math.random() * 0.4 - 0.2;
		const saturationVariation = Math.random() * 0.4 - 0.2;

		// Adjust brightness and saturation of the base color
		const adjustedColor = adjustColor(
			baseColor,
			brightnessVariation,
			saturationVariation
		);

		return adjustedColor;
	};

	const adjustColor = (
		color: string,
		brightness: number,
		saturation: number
	): string => {
		const hex = color.slice(1); // Remove the "#" from the color string
		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4, 6), 16);

		const hsl = rgbToHsl(r, g, b);

		const adjustedHsl = [
			hsl[0], // Hue remains unchanged
			clamp(hsl[1] + saturation), // Adjust saturation within [0, 1]
			clamp(hsl[2] + brightness), // Adjust brightness within [0, 1]
		];

		const adjustedRgb = hslToRgb(
			adjustedHsl[0],
			adjustedHsl[1],
			adjustedHsl[2]
		);

		return `rgb(${adjustedRgb[0]}, ${adjustedRgb[1]}, ${adjustedRgb[2]})`;
	};
	const hslToRgb = (h: number, s: number, l: number): number[] => {
		let r = 0,
			g = 0,
			b = 0;

		if (s === 0) {
			r = g = b = l; // achromatic
		} else {
			const hue2rgb = (p: number, q: number, t: number): number => {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			};

			const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			const p = 2 * l - q;
			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		}

		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	};

	const rgbToHsl = (r: number, g: number, b: number): number[] => {
		r /= 255;
		g /= 255;
		b /= 255;

		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);

		let h = 0,
			s = 0,
			l = 0;

		l = (max + min) / 2;

		if (max === min) {
			h = s = 0; // achromatic
		} else {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
				default:
					break;
			}

			h /= 6;
		}

		return [h, s, l];
	};
	const clamp = (value: number): number => {
		return Math.max(0, Math.min(1, value));
	};

	const originalColors: string[] = ["#3CCF48", "#3FD977", "#43C396", "#3FD9CE"];
	const logoColors: string[] = [
		...originalColors,
		"#5A48A2", // Additional color
		"#FFB533", // Additional color
		// Add more colors here
	].map((baseColor) => getRandomColor(baseColor));

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
