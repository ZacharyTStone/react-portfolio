import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import zach1 from "../../images/threeJS/zach1.jpg";
import zach2 from "../../images/threeJS/zach2.jpg";
import zach3 from "../../images/threeJS/zach3.jpg";
import zach4 from "../../images/threeJS/zach4.jpg";
import zach5 from "../../images/threeJS/zach5.jpeg";

const ThreeComponent = () => {
	const linkToOpenInNewTab = "https://zachinjapan.com/gallery/";
	const canvasRef = useRef();
	const rotationSpeedRefX = useRef(0.0001); // Initial rotation speed
	const rotationSpeedRefY = useRef(0.0001); // Initial rotation speed
	const rotationSpeedRefZ = useRef(0.00000000001); // Initial rotation speed

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({
			canvas: canvasRef.current,
			alpha: true,
		});

		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.position.setZ(30);
		camera.position.setX(-3);

		const geometry = new THREE.BoxGeometry(6, 6, 6);

		const textureLoader = new THREE.TextureLoader();
		const materials = [
			new THREE.MeshStandardMaterial({ map: textureLoader.load(zach1) }),
			new THREE.MeshStandardMaterial({ map: textureLoader.load(zach2) }),
			new THREE.MeshStandardMaterial({ map: textureLoader.load(zach3) }),
			new THREE.MeshStandardMaterial({ map: textureLoader.load(zach4) }),
			new THREE.MeshStandardMaterial({ map: textureLoader.load(zach5) }),
			new THREE.MeshStandardMaterial({ map: textureLoader.load(zach5) }),
		];

		materials.forEach((material) => {
			material.color = new THREE.Color(0x414141);
		});

		const cube = new THREE.Mesh(geometry, materials);

		cube.userData = { URL: linkToOpenInNewTab };

		scene.add(cube);
		cube.position.z = 4;
		cube.position.setX(-10);

		const pointLight = new THREE.PointLight(0xffffff);
		pointLight.position.set(5, 5, 5);
		const ambientLight = new THREE.AmbientLight(0xffffff);
		scene.add(pointLight, ambientLight);

		function moveCamera() {
			const t = document.body.getBoundingClientRect().top;
			camera.position.z = t * -0.09;
			camera.position.x = t * -0.00001;
			camera.rotation.y = t * -0.0002;
		}

		document.body.onscroll = moveCamera;
		moveCamera();

		// Event listeners for increasing and decreasing rotation speed
		document.addEventListener("mousedown", () => {
			rotationSpeedRefX.current += 0.005;
			rotationSpeedRefY.current += 0.005;
			rotationSpeedRefZ.current += 0.005;
		});

		document.addEventListener("mouseup", () => {
			rotationSpeedRefX.current -= 0.005;
			rotationSpeedRefY.current -= 0.005;
			rotationSpeedRefZ.current -= 0.005;
		});

		// on mobile, touchstart and touchend are used instead of mousedown and mouseup
		// document.addEventListener("touchstart", () => {
		// 	rotationSpeedRefX.current += 0.005;
		// 	rotationSpeedRefY.current += 0.005;
		// 	rotationSpeedRefZ.current += 0.005;
		// });

		// document.addEventListener("touchend", () => {
		// 	rotationSpeedRefX.current -= 0.005;
		// 	rotationSpeedRefY.current -= 0.005;

		// 	rotationSpeedRefZ.current -= 0.005;
		// });

		function animate() {
			requestAnimationFrame(animate);

			cube.rotation.x += rotationSpeedRefX.current;
			// Adjust the rotation speed here
			cube.rotation.y += rotationSpeedRefY.current;
			// Adjust the rotation speed here
			cube.rotation.z += rotationSpeedRefZ.current; // Adjust the rotation speed here

			renderer.render(scene, camera);
		}

		animate();

		return () => {};
	}, []);

	return <canvas ref={canvasRef} />;
};

export default ThreeComponent;
