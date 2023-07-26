import "./App.css";
import "animate.css/animate.min.css";
import React, { Suspense, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Overlay } from "./Components/index";
import { inject } from "@vercel/analytics";
import styled from "styled-components";
import { useAppContext } from "./context/appContext";
import BackgroundAudio from "./audio/BackgroundAudio";
import Intro from "./Components/UI/Intro";
import AudioOnClick from "./audio/AudioOnClick";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MOBILE_BREAKPOINT } from "./utils/constants";

// Lazy-loaded components to help initial load time
const LandingV2 = React.lazy(
	() => import("./Components/Pages/LandingV2/LandingV2")
);
const About = React.lazy(() => import("./Components/Pages/About/About"));
const Projects = React.lazy(
	() => import("./Components/Pages/Projects/Projects")
);
const Blog = React.lazy(() => import("./Components/Pages/Blog/Blog"));
const Footer = React.lazy(() => import("./Components/Pages/Footer/Footer"));
const ThreeJS = React.lazy(() => import("./Components/UI/ThreeJsBackground"));

// Inject analytics for Vercel
inject();

function App(): JSX.Element {
	const { acceptApp, showApp, setShowApp } = useAppContext();

	// Log a message to the console for you to see :)
	useEffect(() => {
		console.log(
			"%cHi! Thanks for checking out my code ☺ If you have any questions, feel free to reach out to me on Linkedin",
			"color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
		);
	}, []);

	const isMobile = useMediaQuery({ query: MOBILE_BREAKPOINT });

	// this is esitimated time for the loading animation to finish
	// could be improved by using a callback from the animation but this is good enough for now
	const loadingAnimationTime = 5000;

	// Show app loading animation after accepting app
	useEffect(() => {
		if (!acceptApp) {
			return;
		}

		setTimeout(() => {
			setShowApp(true);
		}, loadingAnimationTime);
	}, [acceptApp]);

	return (
		<div className="App">
			{showApp && isMobile && <div className="mobile-background" />}
			<ToastContainer />
			{!acceptApp && <Intro />}
			<>
				{acceptApp && !showApp && <Overlay />}
				<Main showApp={showApp}>
					{!isMobile && (
						<>
							<canvas id="bg"></canvas>
							<Suspense fallback={<h1>Loading Background...</h1>}>
								<ThreeJS />
							</Suspense>
						</>
					)}
					{showApp && <BackgroundAudio />}
					{<AudioOnClick />}
					<Suspense fallback={<h1>Loading content...</h1>}>
						<LandingV2 />
						<About />
						<Projects />
						<Blog />
						<Footer />
					</Suspense>
				</Main>
			</>
		</div>
	);
}

// we do this so that the app can load while the user is accepting the app and viewing the loading animation
const Main = styled.div<{ showApp: boolean }>`
	opacity: 0;
	transition: opacity 2s ease-in-out;

	${({ showApp }) =>
		showApp &&
		`
    opacity: 1;
    visibility: visible;
		
  `}
`;

export default App;
