import Project from "../../UI/Project/Project";
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
				<Title>{content.mainTitle}</Title>
				<div className="projects-container">
					{content.projects.map((project: any) => (
						<Project project={project} />
					))}
				</div>
			</Main>
		</>
	);
};

const Title = styled.h2`
	position: relative;
	text-decoration-line: underline;
	text-decoration-color: var(--secondary-color);
	text-decoration-thickness: 5px;
	text-underline-offset: 12px;
	font-size: 2rem;
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
		gap: 32px;
		margin-bottom: 200px;
	}

	.ReactModal__Overlay {
		background-color: rgba(0, 0, 0, 0.75);
		z-index: 1000;
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
	}
`;

export default Projects;
