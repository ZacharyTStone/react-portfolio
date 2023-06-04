import "./App.css";
import "animate.css/animate.min.css";
import React, { Suspense, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ParticlesBackground from "./Components/UI/Particles";
import { Overlay } from "./Components/index";
import { inject } from "@vercel/analytics";
import styled from "styled-components";

// kicks off immediately when the current file is imported
const LandingComponentPromise = import(
	"./Components/Pages/LandingV2/LandingV2"
);
const AboutComponentPromise = import("./Components/Pages/About/About");
const ProjectsComponentPromise = import("./Components/Pages/Projects/Projects");
const BlogComponentPromise = import("./Components/Pages/Blog/Blog");
const FooterComponentPromise = import("./Components/Pages/Footer/Footer");

// by the time this gets rendered, your component is probably already loaded
// Suspense still works exactly the same with this.
const LandingV2 = React.lazy(() => LandingComponentPromise);
const About = React.lazy(() => AboutComponentPromise);
const Projects = React.lazy(() => ProjectsComponentPromise);
const Blog = React.lazy(() => BlogComponentPromise);
const Footer = React.lazy(() => FooterComponentPromise);

inject();

function App() {
	console.log(
		"%cHi! Thanks for checking out my code ☺ If you have any questions, feel free to reach out to me on Linkedin",
		"color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
	);

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});

	const [showApp, setShowApp] = useState(false);
	const [lightMode, setLightMode] = useState(
		localStorage.getItem("theme") === "light" ? true : false
	);

	useEffect(() => {
		setTimeout(() => {
			setShowApp(true);
		}, 5000);
	}, []);

	useEffect(() => {
		const rootElement = document.documentElement;
		if (!lightMode) rootElement.classList.remove("light-mode");
		else rootElement.classList.add("light-mode");
		// Save the theme choice in local storage
		localStorage.setItem("theme", lightMode ? "light" : "dark");
	}, [lightMode]);

	return (
		<div className={`App ${lightMode ? "light-mode" : ""}`}>
			{!showApp && <Overlay />}
			<Main showApp={showApp}>
				{isDesktopOrLaptop && <ParticlesBackground lightMode={lightMode} />}
				<Suspense fallback={<h1>Loading...</h1>}>
					<LandingV2 lightMode={lightMode} setLightMode={setLightMode} />
					<About />
					<Projects lightMode={lightMode} />
					<Blog />
					<Footer />
				</Suspense>
			</Main>
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
