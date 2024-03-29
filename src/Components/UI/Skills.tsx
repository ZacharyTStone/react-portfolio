import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GithubContributions } from "react-github-graph";
import Dot from "../../images/ring-pointer.png";
import { Title } from "../UI/StyledComponents";

import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import {
	AiFillHtml5,
	AiFillWechat,
	AiFillGithub,
	AiOutlineApi,
	AiOutlineConsoleSql,
} from "react-icons/ai";
import { RiGatsbyFill, RiVuejsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {
	SiTypescript,
	SiTwilio,
	SiVercel,
	SiJira,
	SiHasura,
	SiRedux,
	SiMongodb,
	SiMaterialdesign,
	SiStyledcomponents,
	SiNetlify,
	SiTailwindcss,
} from "react-icons/si";

import { GrGraphQl, GrReactjs } from "react-icons/gr";
import { TbCloudDataConnection, TbBrandNextjs } from "react-icons/tb";
import { BsUiChecks } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { DiHeroku, DiCss3Full } from "react-icons/di";

// probably should be an object
interface Skill {
	0: JSX.Element;
	1: string;
	2: string;
}

// enum for the skill types

type SkillType =
	| "frontendFrameworks"
	| "frontendTools"
	| "backend"
	| "server"
	| "other";

const Skills = () => {
	const { t } = useTranslation();

	// we have these here not in the constants file because of the icons

	const FRAMEWORKS: Skill[] = [
		[<FaReact />, "React (CRA)", "https://reactjs.org/"],
		[<RiGatsbyFill />, "Gatsby", "https://www.gatsbyjs.org/"],
		[<RiVuejsFill />, "Vue", "https://vuejs.org/"],
		[<TbBrandNextjs />, "Next.js", "https://nextjs.org/"],
	];

	const TOOLS: Skill[] = [
		[
			<AiFillHtml5 />,
			"HTML",
			"https://developer.mozilla.org/en-US/docs/Web/HTML",
		],
		[
			// make the size grow with the viewport
			<DiCss3Full />,
			"CSS",
			"https://developer.mozilla.org/en-US/docs/Web/CSS",
		],

		[
			<IoLogoJavascript />,
			"JavaScript",
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		],

		[<SiTypescript />, "Typescript", "https://www.typescriptlang.org/"],
		[
			<SiStyledcomponents />,
			"Styled Components",
			"https://styled-components.com/",
		],
		[<FaBootstrap />, "Bootstrap", "https://getbootstrap.com/"],
		[<SiTailwindcss />, "Tailwind", "https://tailwindcss.com/"],
		[<SiMaterialdesign />, "Material UI", "https://material-ui.com/"],
		[<GrReactjs />, "Context API", "https://reactjs.org/docs/context.html"],
		[<SiRedux />, "Redux", "https://redux.js.org/"],
	];

	const Backend: Skill[] = [
		[<FaNodeJs />, "Node", "https://nodejs.org/en/"],
		[<AiOutlineApi />, "REST", "https://restfulapi.net/"],
		[<GrGraphQl />, "GraphQL", "https://graphql.org/"],
		[<SiMongodb />, "MongoDB", "https://www.mongodb.com/"],
		[<AiOutlineConsoleSql />, "SQL", "https://www.w3schools.com/sql/"],
		[<SiHasura />, "Hasura", "https://hasura.io/"],
	];

	const Server: Skill[] = [
		[<DiHeroku />, "Heroku", "https://www.heroku.com/"],
		[<SiNetlify />, "Netlify", "https://www.netlify.com/"],
		[<SiVercel />, "Vercel", "https://vercel.com/"],
	];

	const Other: Skill[] = [
		[<SiJira />, "Jira", "https://www.atlassian.com/software/jira"],
		[<AiFillGithub />, "Github", "https ://github.com/"],
		[<SiTwilio />, "Twilio", "https://www.twilio.com/"],
		[<TbCloudDataConnection />, "Ably Web Sockets", "https://www.ably.io/"],
		[<AiFillWechat />, "Chat GPT", "https://chat.openai.com/chat"],
	];
	const SKILL_OPTIONS: SkillType[] = [
		"frontendFrameworks",
		"frontendTools",
		"backend",
		"server",
		"other",
	];

	const [selectedSkill, setSelectedSkill] =
		useState<SkillType>("frontendTools");

	return (
		<>
			<IconContext.Provider
				value={{
					color: "var(--off-white)",
					className: "global-class-name sill-img",
					size: "40px",
				}}
			>
				<SkillsDiv className="Skills">
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							flexWrap: "wrap",
							margin: "0 auto",
							minWidth: "100%",
							alignItems: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "flex-start",
								flexWrap: "wrap",
								width: "fit-content",
								alignItems: "center",
							}}
						>
							<a
								href="https://drive.google.com/file/d/1WrIeOGQ86a2U0DSC8ay4g1NtUr9Ieygs/view?usp=sharing"
								target="_blank"
								id="resume-link"
								rel="noopener noreferrer"
								style={{
									color: "var(--primary-color)",
									textDecoration: "none",
									marginTop: "20px",
									marginBottom: "20px",
									marginRight: "20px",
									display: "flex",
								}}
							>
								<div style={{ display: "flex", alignItems: "center" }}>
									<IoMdPaper size={"1.5rem"} color="var(--secondary-color)" />
									<span
										className="about-description resume-link-text"
										style={{
											marginLeft: "10px",
											color: "var(--off-white)",
										}}
									>
										{t("skills.resume")}
									</span>
								</div>
							</a>
							<>
								<a
									href="https://docs.google.com/document/d/1SFRXMNP7yeWrZRcPUAJX-_R28WVdn3w3V7w7fxJnn0w/edit?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									id="resume-link"
									style={{
										color: "var(--primary-color)",
										textDecoration: "none",
										marginTop: "20px",
										marginBottom: "20px",
										marginRight: "20px",
										display: "flex",
									}}
								>
									<div style={{ display: "flex", alignItems: "center" }}>
										<IoMdPaper size={"1.5rem"} color="var(--secondary-color)" />
										<span
											className="about-description resume-link-text"
											style={{
												marginLeft: "10px",
												color: "var(--off-white)",
											}}
										>
											{t("skills.japaneseResume")}
										</span>
									</div>
								</a>
							</>
							<>
								<a
									href="https://docs.google.com/document/d/1fRI7eljSkGz4WSPEQplo96WJkOopIMpU2teJUlozhyg/edit?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									id="resume-link"
									style={{
										textDecoration: "none",
										color: "var(--off-white)",
										marginTop: "20px",
										marginBottom: "20px",
										display: "flex",
									}}
								>
									<div style={{ display: "flex", alignItems: "center" }}>
										<BsUiChecks
											color="var(--secondary-color)"
											size={"1.5rem"}
										/>
										<span
											className="about-description resume-link-text"
											style={{
												marginLeft: "0.5rem",
												color: "var(--off-white)",
											}}
										>
											{t("skills.certifications")}
										</span>
									</div>
								</a>
							</>
						</div>
					</div>

					<div className="skills-container">
						<ButtonContainer>
							{SKILL_OPTIONS.map((skill: any) => (
								<SkillTypeButton
									key={skill[0]}
									onClick={() => setSelectedSkill(skill)}
									className={selectedSkill === skill ? "active" : ""}
								>
									{t(`skills.${skill}`)}
								</SkillTypeButton>
							))}
						</ButtonContainer>
						<SkillIconsDiv>
							{selectedSkill === "frontendFrameworks" &&
								FRAMEWORKS.map((skill: any) => (
									<div key={skill[1]}>
										<a
											href={skill[2]}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "none",
											}}
										>
											<div key={skill[1]} className="skill-icon">
												<h4 className="skill-icon-text showOnHover">
													{skill[1]}
												</h4>
												<span>
													{" "}
													<span>{skill[0]}</span>
												</span>
											</div>
										</a>
									</div>
								))}
							{selectedSkill === "frontendTools" &&
								TOOLS.map((skill: any) => (
									<div key={skill[1]} className="skill">
										<a
											href={skill[2]}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "none",
											}}
										>
											<div key={skill[1]} className="skill-icon">
												<h4 className="skill-icon-text showOnHover">
													{skill[1]}
												</h4>
												<span>
													<span>{skill[0]}</span>
												</span>
											</div>
										</a>
									</div>
								))}
							{selectedSkill === "backend" &&
								Backend.map((skill: any) => (
									<div key={skill[1]} className="skill">
										<a
											href={skill[2]}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "none",
											}}
										>
											<div key={skill[1]} className="skill-icon">
												<h4 className="skill-icon-text showOnHover">
													{skill[1]}
												</h4>
												<span>
													<span>{skill[0]}</span>
												</span>
											</div>
										</a>
									</div>
								))}
							{selectedSkill === "server" &&
								Server.map((skill: any) => (
									<div key={skill[1]} className="skill">
										<a
											href={skill[2]}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "none",
											}}
										>
											<div key={skill[1]} className="skill-icon">
												<h4 className="skill-icon-text showOnHover">
													{skill[1]}
												</h4>
												<span>
													<span>{skill[0]}</span>
												</span>
											</div>
										</a>
									</div>
								))}

							{selectedSkill === "other" &&
								Other.map((skill: any) => (
									<div key={skill[1]} className="skill">
										<a
											href={skill[2]}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "none",
											}}
										>
											<div key={skill[1]} className="skill-icon">
												<h4 className="skill-icon-text showOnHover">
													{skill[1]}
												</h4>
												<span>
													<span>{skill[0]}</span>
												</span>
											</div>
										</a>
									</div>
								))}
						</SkillIconsDiv>
					</div>
				</SkillsDiv>
			</IconContext.Provider>
		</>
	);
};

const GithubStats = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	margin-top: 20px;
	margin-bottom: 40px;

	.github-stats-img {
		width: "100%" !important;
		height: "auto";

		// semi transparent
		opacity: 0.6;
	}
`;

const SkillIconsDiv = styled.div`
	min-height: 240px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 10px;
	width: 100%;

	@media (max-width: 1500px) {
		grid-gap: 5px;
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

// tablet do repeat of 4

const ButtonContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 10px;
	width: 100%;

	@media (max-width: 1500px) {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	}
`;

const SkillTypeButton = styled.button`
	border: 2px solid var(--secondary-color);
	background: linear-gradient(
		var(--secondary_color),
		var(--secondary-color-dark)
	);
	color: var(--white);
	border-radius: 10px;

	box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 0 0 0.5px rgba(0, 0, 0, 0.1),
		0 0 0 0.5px rgba(0, 0, 0, 0.1);

	font-size: medium;
	font-weight: 600;
	padding: 10px;
	margin: 5px;
	min-height: 50px;
	cursor: url(${Dot}) 4 4, pointer;

	border-radius: 10px;
`;

const SkillsDiv = styled.div`
	.github {
		margin-bottom: 40px !important;
	}
	.ContributionCalendar-label {
		fill: var(--secondary-color) !important;
	}

	.contributions-header {
		margin-bottom: 20px !important;
	}

	.contributions-chart {
		display: flex;
		justify-content: center;
	}

	.skill {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.Skills {
		margin: auto;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: left;
		padding: 10px;
		margin-bottom: 10px;
		margin-top: 10px;

		gap: 24px;
	}

	.skills-title {
		text-align: center;
	}

	.skills-container {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: auto;
		flex-wrap: wrap;
		flex-flow: row wrap;
		margin-top: 20px;
		margin-bottom: 10px;
		justify-content: center;
	}

	.skill-icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10px;
		margin-top: 10px;
		color: var(--off-white);
		text-decoration: none !important;
	}

	.skill-icon:hover {
		cursor: url(${Dot}) 4 4, pointer;
		transform: scale(1.5);
		transition: transform 0.5s ease-in-out;
		color: var(--secondary-color);
		transform: translateY(-5px);
	}

	.skill-icon-text {
		margin-bottom: 10px;
		text-decoration: none;
		text-align: center;
		white-space: nowrap;
	}

	.skill-img {
		margin-top: 10px;
	}

	.resume-link-text {
		font-size: 1.5rem;
	}

	.resume-link-text:hover {
		/* cursor: pointer; */
		cursor: url(${Dot}) 4 4, pointer;
		color: var(--secondary-color) !important;
	}

	.active {
		background: var(--secondary-color);
		color: var(--white);
	}
`;

export default Skills;
