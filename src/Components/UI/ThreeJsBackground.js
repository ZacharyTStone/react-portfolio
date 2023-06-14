import React, { useEffect } from "react";
import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	Mesh,
	PointLight,
	AmbientLight,
	TextureLoader,
	SphereGeometry,
	MeshStandardMaterial,
	MathUtils,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import mooon from "../../images/threeJS/moon.jpeg";
import space from "../../images/threeJS/space.jpeg";
import { debounce } from "lodash";

const ThreeComponent = () => {
	const moonTexture = new TextureLoader().load(mooon);
	const spaceTexture = new TextureLoader().load(space);
	useEffect(() => {
		// Setup
		const scene = new Scene();
		const camera = new PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		document
			.getElementById("canvas-container")
			.appendChild(renderer.domElement);

		// Torus
		const geometry = new SphereGeometry(14, 64, 100);
		const material = new MeshStandardMaterial({
			color: 0x323333,
			map: moonTexture,
		});
		const torus = new Mesh(geometry, material);
		scene.add(torus);

		// Lights
		const pointLight = new PointLight(0xffffff);
		pointLight.position.set(5, 5, 5);

		const ambientLight = new AmbientLight(0xffffff);
		scene.add(pointLight, ambientLight);

		const addStar = () => {
			const geometry = new SphereGeometry(0.25, 24, 24);
			const material = new MeshStandardMaterial({
				color: 0x00ff00,
				transparent: true,
				opacity: 0.8,
			});
			const star = new Mesh(geometry, material);

			const [x, y, z] = Array(3)
				.fill()
				.map(() => MathUtils.randFloatSpread(150));

			star.position.set(x, y, z);
			scene.add(star);
		};

		Array(200).fill().forEach(addStar);

		scene.background = spaceTexture;

		// Scroll Animation
		const moveCamera = debounce(() => {
			const t = document.body.getBoundingClientRect().top;

			// Move the camera based on scroll position
			camera.position.z = t * -0.09; // Move camera along the z-axis
			camera.position.x = t * -0.00009; // Move camera along the x-axis
			camera.rotation.y = t * -0.0002; // Rotate camera around the y-axis
		}, 10);

		document.body.addEventListener("scroll", moveCamera);
		moveCamera();

		// Animation Loop
		const animate = () => {
			requestAnimationFrame(animate);

			torus.rotation.x += 0.0001;
			torus.rotation.y += 0.0005;
			torus.rotation.z += 0.001;

			renderer.render(scene, camera);
		};

		animate();

		// Clean up
		return () => {
			document
				.getElementById("canvas-container")
				?.removeChild(renderer.domElement);
			document.body.removeEventListener("scroll", moveCamera);
		};
	}, []);

	return <div id="canvas-container" />;
};

export default ThreeComponent;
