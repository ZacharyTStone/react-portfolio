import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useAppContext } from "../../context/appContext";

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		// Initialize the tsParticles instance (engine) here, adding custom shapes or presets
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			console.log(container);
		},
		[]
	);

	const { theme } = useAppContext();
	if (theme === "light") return null;

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: "var(--black)",
					},
				},
				fpsLimit: 60,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						onHover: {
							enable: false,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 1,
						},
					},
				},
				particles: {
					color: {
						value: "#fff01c",
					},
					shape: {
						type: "circle",
					},
					opacity: {
						value: 1,
						random: true,
						anim: {
							enable: true,
							speed: 1,
							opacity_min: 0.6,
							sync: false,
						},
					},
					size: {
						value: { min: 0.8, max: 4 },
						random: true,
						anim: {
							enable: true,
							speed: 1,
							size_min: 0.1,
							sync: false,
						},
					},
					move: {
						enable: true,
						speed: 0.2,
						direction: "none",
						random: true,
						straight: false,
						out_mode: "out",
						bounce: false,
					},
				},
			}}
		/>
	);
};

export default ParticlesBackground;
