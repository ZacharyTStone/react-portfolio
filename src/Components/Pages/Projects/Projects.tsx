import { AnimationOnScroll } from "react-animation-on-scroll";
import ProjectModal from "../../UI/ProjectModal/ProjectModal";
import styled from "styled-components";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "../../../utils/constants";

const Projects = () => {
	const { i18n } = useTranslation();

	let content = PROJECTS as any;
	i18n.language === "en"
		? (content = content.English)
		: (content = content.Japanese);

	return (
		<>
			<Main className="Projects" id="Projects">
				<h1>{content.mainTitle}</h1>
				{/* <RunningImg src={Naruto} /> */}
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

const Main = styled.div`
	text-align: center;
	width: 100%;
	user-select: none;
	margin-top: 150px;
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
		gap: 8px;
	}

	.ReactModal__Overlay {
		background-color: var(--black) !important;
	}

	@media (max-width: 800px) {
		.project-icons {
			display: none !important;
		}
	}

	@media (min-width: 1300px) {
		.projects-container {
			width: 90%;
			flex-wrap: wrap;
			margin: auto;
			margin-top: 60px;
			padding-bottom: 60px;
		}

		h1 {
			font-size: 2.5rem;
		}
	}
`;

export default Projects;
