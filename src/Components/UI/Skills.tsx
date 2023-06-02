import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GithubContributions } from "react-github-graph";
import Dot from "../../images/ring-pointer.png";

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

const Skills = () => {
	const { t } = useTranslation();

	const FRAMEWORKS = [
		[<FaReact />, "React (CRA)", "https://reactjs.org/"],
		[<RiGatsbyFill />, "Gatsby", "https://www.gatsbyjs.org/"],
		[<RiVuejsFill />, "Vue", "https://vuejs.org/"],
		[<TbBrandNextjs />, "Next.js", "https://nextjs.org/"],
	];

	const TOOLS = [
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

	const Backend = [
		[<FaNodeJs />, "Node", "https://nodejs.org/en/"],
		[<AiOutlineApi />, "REST", "https://restfulapi.net/"],
		[<GrGraphQl />, "GraphQL", "https://graphql.org/"],
		[<SiMongodb />, "MongoDB", "https://www.mongodb.com/"],
		[<AiOutlineConsoleSql />, "SQL", "https://www.w3schools.com/sql/"],
		[<SiHasura />, "Hasura", "https://hasura.io/"],
	];

	const Server = [
		[<DiHeroku />, "Heroku", "https://www.heroku.com/"],
		[<SiNetlify />, "Netlify", "https://www.netlify.com/"],
		[<SiVercel />, "Vercel", "https://vercel.com/"],
	];

	const Other = [
		[<SiJira />, "Jira", "https://www.atlassian.com/software/jira"],
		[<AiFillGithub />, "Github", "https ://github.com/"],
		[<SiTwilio />, "Twilio", "https://www.twilio.com/"],
		[<TbCloudDataConnection />, "Ably Web Sockets", "https://www.ably.io/"],
		[<AiFillWechat />, "Chat GPT", "https://chat.openai.com/chat"],
	];
	const SKILL_OPTIONS = [
		"Frontend Frameworks",
		"Frontend Tools",
		"Backend",
		"Server",
		"Other",
	];

	const [selectedSkill, setSelectedSkill] = React.useState(
		"Frontend Frameworks"
	);

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
							}}
						>
							<>
								<a
									href="https://docs.google.com/document/d/1r5U9UF6FJc0zr_L98dpIwj9Xe0-0CtoVfoux4nxD-g8/edit?usp=sharing"
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
									{" "}
									<IoMdPaper size={"1.25rem"} color="var(--secondary-color)" />
									<span
										className="about-description resume-link-text"
										style={{
											marginLeft: "10px",
											color: "var(--off-white)",
										}}
									>
										{t("skills.resume")}
									</span>
								</a>
							</>
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
									{" "}
									<IoMdPaper size={"1.25rem"} color="var(--secondary-color)" />
									<span
										className="about-description resume-link-text"
										style={{
											marginLeft: "10px",
											color: "var(--off-white)",
										}}
									>
										{t("skills.japaneseResume")}
									</span>
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
									<BsUiChecks color="var(--secondary-color)" size={"1.25rem"} />
									<span
										className="about-description resume-link-text"
										style={{
											marginLeft: "0.5rem",
											color: "var(--off-white)",
										}}
									>
										{t("skills.certifications")}
									</span>
								</a>
							</>
						</div>
					</div>
					<div className="github">
						{/* <GithubContributions username="ZacharyTStone" />  */}
					</div>
					<div className="skills-container">
						<ButtonContainer>
							{SKILL_OPTIONS.map((skill: any) => (
								<SkillTypeButton
									key={skill[0]}
									onClick={() => setSelectedSkill(skill)}
									className={selectedSkill === skill ? "active" : ""}
								>
									{skill}
								</SkillTypeButton>
							))}
						</ButtonContainer>
						<SkillIconsDiv>
							{selectedSkill === "Frontend Frameworks" &&
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
							{selectedSkill === "Frontend Tools" &&
								TOOLS.map((skill: any) => (
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
													<span>{skill[0]}</span>
												</span>
											</div>
										</a>
									</div>
								))}
							{selectedSkill === "Backend" &&
								Backend.map((skill: any) => (
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
													<span>{skill[0]}</span>
												</span>
											</div>
										</a>
									</div>
								))}
							{selectedSkill === "Server" &&
								Server.map((skill: any) => (
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
													<span>{skill[0]}</span>
												</span>
											</div>
										</a>
									</div>
								))}

							{selectedSkill === "Other" &&
								Other.map((skill: any) => (
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

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
`;

const SkillIconsDiv = styled.div`
	min-height: 150px;
	display: flex;
	width: 100%;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const SkillTypeButton = styled.button`
	border: 2px solid var(--secondary-color);
	background: linear-gradient(
		var(--secondary_color),
		var(--secondary-color-dark)
	);
	color: var(--secondary-color-dark);
	border-radius: 10px;
	/* cursor: pointer; */

	box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 0 0 0.5px rgba(0, 0, 0, 0.1),
		0 0 0 0.5px rgba(0, 0, 0, 0.1);

	font-size: medium;
	font-weight: 600;
	padding: 10px;
	margin: 10px;
	min-height: 50px;
	cursor: url(${Dot}) 4 4, pointer;

	border-radius: 10px;
`;

const SkillsDiv = styled.div`
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
		justify-content: space-around;
		flex-wrap: wrap;
		flex-flow: row wrap;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	@media (max-width: 768px) {
		.skills-container {
			display: none;
		}
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

	.resume-link-text:hover {
		/* cursor: pointer; */
		cursor: url(${Dot}) 4 4, pointer;
		color: var(--secondary-color) !important;
	}

	// skill option button neomorphic styling using the seconday color

	.active {
		background: linear-gradient(
			var(--secondary_color),
			var(--secondary-color-dark)
		);
		color: var(--secondary-color);
	}
`;

export default Skills;
