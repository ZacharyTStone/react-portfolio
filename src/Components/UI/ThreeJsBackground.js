import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import mooon from "../../images/threeJS/moon.webp";
import space from "../../images/threeJS/space.jpeg";

const ThreeComponent = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		let animationFrameId;
		const canvas = canvasRef.current;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			canvas.clientWidth / canvas.clientHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		canvas.appendChild(renderer.domElement);

		// Torus
		const geometry = new THREE.TorusGeometry(14, 4, 64, 100);
		const moonTexture = new THREE.TextureLoader().load(mooon);
		const material = new THREE.MeshStandardMaterial({
			color: 0x323333,
			map: moonTexture,
		});
		const torus = new THREE.Mesh(geometry, material);
		scene.add(torus);

		// Lights
		const pointLight = new THREE.PointLight(0xffffff);
		pointLight.position.set(5, 5, 5);

		const ambientLight = new THREE.AmbientLight(0xffffff);
		scene.add(pointLight, ambientLight);

		const addStar = () => {
			const geometry = new THREE.SphereGeometry(0.25, 24, 24);
			const material = new THREE.MeshStandardMaterial({
				color: 0x00ff00,
				transparent: true,
				opacity: 0.8,
			});
			const star = new THREE.Mesh(geometry, material);

			const [x, y, z] = Array(3)
				.fill()
				.map(() => THREE.MathUtils.randFloatSpread(250));

			star.position.set(x, y, z);
			scene.add(star);
		};

		Array(25).fill().forEach(addStar);

		// Background
		const spaceTexture = new THREE.TextureLoader().load(space);
		scene.background = spaceTexture;

		// Scroll Animation
		const handleScroll = () => {
			const t = canvas.getBoundingClientRect().top;
			camera.position.z = t * -0.09;
			camera.position.x = t * -0.00009;
			camera.rotation.y = t * -0.0002;
		};

		const canvasContainer = document.getElementById("canvas-container");
		canvasContainer.addEventListener("scroll", handleScroll);

		// Animation Loop
		const animate = () => {
			animationFrameId = requestAnimationFrame(animate);

			torus.rotation.x += 0.0001;
			torus.rotation.y += 0.0005;
			torus.rotation.z += 0.001;

			renderer.render(scene, camera);
		};

		animate();

		// Clean up
		return () => {
			cancelAnimationFrame(animationFrameId);
			canvasContainer.removeEventListener("scroll", handleScroll);
			canvas.removeChild(renderer.domElement);
		};
	}, []);

	return <div id="canvas-container" ref={canvasRef} />;
};

export default ThreeComponent;
