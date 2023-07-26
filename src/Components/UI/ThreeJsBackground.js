import React, { useEffect, useRef, useCallback, useMemo } from "react";
import * as THREE from "three";
import mooon from "../../images/threeJS/moon.webp";
import space from "../../images/threeJS/space.jpeg";
import { ResizeObserver } from "@juggle/resize-observer";
import { debounce } from "lodash";

const calculateHeight = () => {
	return window.innerHeight;
};

const ThreeComponent = React.memo(() => {
	const containerRef = useRef(null);
	const sceneRef = useRef(null);
	const cameraRef = useRef(null);
	const rendererRef = useRef(null);
	const torusRef = useRef(null);

	const geometry = useMemo(() => new THREE.TorusGeometry(10, 3, 70, 8), []);

	const moonTexture = useMemo(() => new THREE.TextureLoader().load(mooon), []);

	const material = useMemo(
		() =>
			new THREE.MeshStandardMaterial({
				color: 0xffffff,
				map: moonTexture,
				roughness: 0.9,
				metalness: 0.9,
			}),
		[moonTexture]
	);

	const starGeometry = useMemo(
		() => new THREE.SphereGeometry(0.25, 24, 24),
		[]
	);

	const starMaterial = useMemo(
		() =>
			new THREE.MeshStandardMaterial({
				color: 0x00ff00,
				transparent: true,
				opacity: 0.8,
			}),
		[]
	);

	const init = useCallback(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ antialias: true });

		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		containerRef.current.appendChild(renderer.domElement);

		const torus = new THREE.Mesh(geometry, material);
		scene.add(torus);

		// start the torus slightly turned
		torus.rotation.x = 0.5;
		torus.rotation.y = 0.5;
		torus.rotation.z = 0.5;

		const pointLight = new THREE.PointLight(0xffffff);
		pointLight.position.set(5, 5, 5);

		const ambientLight = new THREE.AmbientLight(0xffffff);
		scene.add(pointLight, ambientLight);

		const starMesh = new THREE.Mesh(starGeometry, starMaterial);

		const addStar = () => {
			const star = starMesh.clone();

			const [x, y, z] = Array(3)
				.fill()
				.map(() => THREE.MathUtils.randFloatSpread(250));

			star.position.set(x, y, z);
			scene.add(star);
		};

		Array(75).fill().forEach(addStar);

		const spaceTexture = new THREE.TextureLoader().load(space);
		scene.background = spaceTexture;

		const animate = () => {
			requestAnimationFrame(animate);

			torus.rotation.x += 0.00009;
			torus.rotation.y += 0.0004;
			torus.rotation.z += 0.0009;

			renderer.render(scene, camera);
		};

		const animateCamera = () => {
			const t = document.body.getBoundingClientRect().top;

			camera.position.z = t * -0.09;
			camera.position.x = t * -0.00009;
			camera.rotation.y = t * -0.0002;

			requestAnimationFrame(animateCamera);
		};

		animate();
		animateCamera();

		sceneRef.current = scene;
		cameraRef.current = camera;
		rendererRef.current = renderer;
		torusRef.current = torus;
	}, [geometry, material, starGeometry, starMaterial]);

	const handleWindowResize = useCallback(
		debounce(() => {
			const width = window.innerWidth;
			const height = calculateHeight();
			const camera = cameraRef.current;
			const renderer = rendererRef.current;

			if (camera) {
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
			}

			if (renderer) {
				renderer.setSize(width, height);
				renderer.setPixelRatio(window.devicePixelRatio);
			}
		}, 200),
		[]
	);

	useEffect(() => {
		const resizeObserver = new ResizeObserver(handleWindowResize);
		resizeObserver.observe(window.document.body);

		init();

		return () => {
			resizeObserver.disconnect();

			if (
				containerRef.current &&
				containerRef.current.contains(rendererRef.current.domElement)
			) {
				containerRef.current.removeChild(rendererRef.current.domElement);
			}
		};
	}, [init]);

	return <div ref={containerRef} className="fade-in-on-mount" />;
});

export default ThreeComponent;
