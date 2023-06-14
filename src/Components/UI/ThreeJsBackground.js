import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import mooon from "../../images/threeJS/moon.webp";
import space from "../../images/threeJS/space.jpeg";
import { debounce } from "lodash";

const ThreeComponent = () => {
	const containerRef = useRef(null);
	let camera, renderer, scene, torus;

	useEffect(() => {
		const init = () => {
			// Setup
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera(
				75,
				window.innerWidth / window.innerHeight,
				0.1,
				1000
			);
			renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(window.devicePixelRatio);
			containerRef.current.appendChild(renderer.domElement);

			// Torus
			const geometry = new THREE.TorusGeometry(14, 4, 64, 100);
			const moonTexture = new THREE.TextureLoader().load(mooon);
			const material = new THREE.MeshStandardMaterial({
				color: 0x323333,
				map: moonTexture,
			});
			torus = new THREE.Mesh(geometry, material);
			scene.add(torus);

			// Lights
			const pointLight = new THREE.PointLight(0xffffff);
			pointLight.position.set(5, 5, 5);

			const ambientLight = new THREE.AmbientLight(0xffffff);
			scene.add(pointLight, ambientLight);

			// Add stars
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

			Array(75).fill().forEach(addStar);

			// Background
			const spaceTexture = new THREE.TextureLoader().load(space);
			scene.background = spaceTexture;

			// Scroll Animation
			const moveCamera = () => {
				const t = document.body.getBoundingClientRect().top;

				// Move the camera based on scroll position
				camera.position.z = t * -0.09; // Move camera along the z-axis
				camera.position.x = t * -0.00009; // Move camera along the x-axis
				camera.rotation.y = t * -0.0002; // Rotate camera around the y-axis
			};

			document.body.onscroll = moveCamera;
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
		};

		const handleWindowResize = debounce(() => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			if (camera) {
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
			}
			if (renderer) {
				renderer.setSize(width, height);
			}
		}, 200);

		window.addEventListener("resize", handleWindowResize);

		init();

		return () => {
			window.removeEventListener("resize", handleWindowResize);
			if (
				containerRef.current &&
				containerRef.current.contains(renderer.domElement)
			) {
				containerRef.current.removeChild(renderer.domElement);
			}
		};
	}, []);

	return <div ref={containerRef} />;
};

export default ThreeComponent;
