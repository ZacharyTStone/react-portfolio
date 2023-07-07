import "./App.css";
import "animate.css/animate.min.css";
import React, { Suspense, useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { Overlay } from "./Components/index";
import { inject } from "@vercel/analytics";
import styled from "styled-components";
import { useAppContext } from "./context/appContext";
import BackgroundAudio from "./audio/BackgroundAudio";
import Intro from "./Components/UI/Intro";
import AudioOnClick from "./audio/AudioOnClick";
import AudioOnHover from "./audio/AudioOnHover";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import space from "./images/threeJS/space.jpeg";

// Components
const LandingComponentPromise = import(
	"./Components/Pages/LandingV2/LandingV2"
);
const AboutComponentPromise = import("./Components/Pages/About/About");
const ProjectsComponentPromise = import("./Components/Pages/Projects/Projects");
const BlogComponentPromise = import("./Components/Pages/Blog/Blog");
const FooterComponentPromise = import("./Components/Pages/Footer/Footer");
const ThreeJSComponentPromise = import("./Components/UI/ThreeJsBackground");

// Lazy-loaded components
const LandingV2 = React.lazy(() => LandingComponentPromise);
const About = React.lazy(() => AboutComponentPromise);
const Projects = React.lazy(() => ProjectsComponentPromise);
const Blog = React.lazy(() => BlogComponentPromise);
const Footer = React.lazy(() => FooterComponentPromise);
const ThreeJS = React.lazy(() => ThreeJSComponentPromise);

// Inject analytics
inject();

function App(): JSX.Element {
	const { acceptApp, showApp, setShowApp, setAcceptApp } = useAppContext();
	console.log(
		"%cHi! Thanks for checking out my code ☺ If you have any questions, feel free to reach out to me on Linkedin",
		"color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
	);

	const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

	const loadingAnimationTime = 4750;

	// Show app loader after accepting app
	useEffect(() => {
		if (!acceptApp && !isMobile) {
			return;
		}

		setTimeout(() => {
			setShowApp(true);
		}, loadingAnimationTime);
	}, [acceptApp]);

	// Skip intro on mobile
	useEffect(() => {
		if (!acceptApp && isMobile) {
			setAcceptApp(true);
		}
	}, [isMobile]);

	return (
		<div className={`App`}>
			<div className={`${showApp && isMobile ? "mobile-background" : ""}`} />
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

// this app uses some heavy animations like the threeJS background. I wanted to make sure that the user could see the app before the animations loaded

// So I opted to have everything load in the background from the start and then show the app afer the user accepts the app and sees the intro
const Main = styled.div<{ showApp: boolean }>`
	opacity: 0;
	transition: opacity 0.5s linear;

	${(props) =>
		props.showApp &&
		`
    opacity: 1;
    visibility: visible;
  `}
`;

export default App;
