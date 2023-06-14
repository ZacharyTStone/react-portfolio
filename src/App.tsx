import "./App.css";
import "animate.css/animate.min.css";
import React, { Suspense, useState, useEffect } from "react";
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
import ParticlesBackground from "./Components/UI/Particles";
import ThreeComponent from "./Components/UI/ThreeJsBackground";

// Components
const LandingComponentPromise = import(
	"./Components/Pages/LandingV2/LandingV2"
);
const AboutComponentPromise = import("./Components/Pages/About/About");
const ProjectsComponentPromise = import("./Components/Pages/Projects/Projects");
const BlogComponentPromise = import("./Components/Pages/Blog/Blog");
const FooterComponentPromise = import("./Components/Pages/Footer/Footer");

// Lazy-loaded components
const LandingV2 = React.lazy(() => LandingComponentPromise);
const About = React.lazy(() => AboutComponentPromise);
const Projects = React.lazy(() => ProjectsComponentPromise);
const Blog = React.lazy(() => BlogComponentPromise);
const Footer = React.lazy(() => FooterComponentPromise);

// Inject analytics
inject();

function App() {
	console.log(
		"%cHi! Thanks for checking out my code ☺ If you have any questions, feel free to reach out to me on Linkedin",
		"color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
	);

	useEffect(() => {
		// whenever the viewpor changes re-render the ThreeComponent
		window.addEventListener("resize", () => {
			setShowThree(false);
			setTimeout(() => {
				setShowThree(true);
			}, 300);
		});
	}, [window.innerWidth]);

	const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

	const { acceptApp, showApp, setShowApp, theme, enableParticles } =
		useAppContext();

	useEffect(() => {
		if (!acceptApp) return;
		setTimeout(() => {
			setShowApp(true);
		}, 4750);
	}, [acceptApp]);

	const [showThree, setShowThree] = useState(true);

	return (
		<div className={`App ${theme === "light" ? "light-mode" : ""}`}>
			{!acceptApp && <Intro />}
			<>
				{acceptApp && !showApp && <Overlay />}
				<ToastContainer />

				<Main showApp={showApp}>
					{showThree && !isMobile && (
						<>
							<canvas id="bg"></canvas>
							<ThreeComponent />
						</>
					)}
					{enableParticles && <ParticlesBackground />}
					{showApp && <BackgroundAudio />}
					{<AudioOnClick />}
					{/* {<AudioOnHover />} */}
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
