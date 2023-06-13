import { AnimationOnScroll } from "react-animation-on-scroll";
import ProjectModal from "../../UI/ProjectModal/ProjectModal";
import styled from "styled-components";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "../../../utils/vars";
import RunningImg from "../../UI/RunningImg";
import Naruto from "../../../images/UI/narutoRun.gif";
const Projects = () => {
	const { i18n } = useTranslation();

	let content = PROJECTS as any;
	i18n.language === "en"
		? (content = content.English)
		: (content = content.Japanese);

	return (
		<>
			<Main className="Projects" id="Projects">
				<Title>{content.mainTitle}</Title>
				{/* <RunningImg src={Naruto} alt="naruto" /> */}
				<AnimationOnScroll
					animateIn="animate__fadeIn"
					animateOut="animate__fadeOut"
					animateOnce={true}
				></AnimationOnScroll>

				<div className="projects-container">
					{content.projects.map((project: any) => (
						<ProjectModal project={project} />
					))}
				</div>
			</Main>
		</>
	);
};

const Title = styled.h1`
	position: relative;
	text-decoration-line: underline;
	text-decoration-color: var(--secondary-color);
	text-decoration-thickness: 5px;
	text-underline-offset: 12px;
`;
const Main = styled.div`
	text-align: center;
	width: 100%;
	user-select: none;

	background: var(--black);

	.projects-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		align-content: center;
		overflow: hidden;
		gap: 32px;
		margin-bottom: 200px;
	}

	.ReactModal__Overlay {
		background-color: var(--black) !important;
	}

	@media (max-width: 800px) {
		.project-icons {
			display: none !important;
		}

		margin-top: 150px !important;
	}

	@media (min-width: 1300px) {
		.projects-container {
			width: 90%;
			flex-wrap: wrap;
			margin: auto;
			margin-top: 60px;
			margin-bottom: 200px;
		}

		h1 {
			font-size: 2.5rem;
		}
	}
`;

export default Projects;
