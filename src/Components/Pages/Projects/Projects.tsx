import quote from "../../../images/projects/quote.webp";
import blog from "../../../images/projects/blog.webp";
import prefecture from "../../../images/projects/prefecture.webp";
import anime from "../../../images/projects/anime.webp";
import haku from "../../../images/projects/haku.webp";
import { AnimationOnScroll } from "react-animation-on-scroll";
import niceRiff from "../../../images/projects/niceRiff.jpeg";
import ProjectModal from "../../UI/ProjectModal/ProjectModal";
import styled from "styled-components";
import "./Projects.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
	const { i18n } = useTranslation();

	let content: any = {
		English: {
			mainTitle: "Personal Projects",

			projects: [
				{
					title: "My Anime Collection",
					description: "Find and keep track of your favorite anime.",
					image: anime,
					link: "https://www.my-anime-collection.com/landing",
					linkText: "Live Demo",
					github: "https://github.com/zachinjapan/my-anime-collection",
					tech: "Tech",
					tags: [
						"React",
						"CSS",
						"Node",
						"API",
						"Authentication",
						"MongoDB",
						"Heroku",
					],
					youtube: "https://www.youtube.com/embed/D_lXDfCJf6k",
					english: true,
					japanese: true,
				},

				{
					title: "Zach In Japan",
					description:
						"Read about coding concepts, Japan, and all things related to being a web developer.",
					image: blog,
					link: "https://zachinjapan.com",
					linkText: "Live Demo",
					github: "https://github.com/zachinjapan/my-gatsby-blog",
					tech: "Tech",
					tags: [
						"Gatsby",
						"React",
						"CSS",
						"Markdown",

						"GraphQL",
						"Gatsby Cloud",
					],
					youtube: "https://www.youtube.com/embed/lt48zTXl6j0",
					english: true,
					japanese: false,
				},
				{
					title: `HAKU`,
					description: "Track and compare jobs during the interview process.",
					image: haku,
					link: "https://hataraku.herokuapp.com",
					linkText: "Live Demo",
					github: "https://github.com/zachinjapan/haku",
					tech: "Tech",
					tags: [
						"React",
						"CSS",
						"Node",
						"API",
						"Authentication",
						"MongoDB",
						"Heroku",
					],
					youtube: "https://www.youtube.com/embed/q1rVbqMw0ug",
					english: true,
					japanese: false,
				},
				{
					title: "Riffs!",
					description:
						"A place to share your new songs, covers, and musical ideas with the world",
					image: niceRiff,
					link: "https://riffs.netlify.app/",
					linkText: "Live Demo",
					github: "https://github.com/zachinjapan/vue-music-app",
					tech: "Tech",
					tags: ["Vue", "CSS", "Firebase", "Authentication", "Netlify"],
					youtube: "https://www.youtube.com/embed/gBIhz-0Jkg8",
					english: true,
					japanese: true,
				},
				{
					title: "Quote Quiz",
					description:
						"Quiz your knowledge of famous quotes and share your favorite quotes on twitter.",
					image: quote,
					link: "https://quotequiz.netlify.app",
					linkText: "Live Demo",
					github: "https://github.com/zachinjapan/quotes",
					tech: "Tech",
					tags: ["React", "CSS", "API", "TypeScript", "Netlify"],
					english: true,
					japanese: false,
				},

				{
					title: "Prefecture Match",
					description:
						"Learn the Japanese prefectures using this fun matching game",
					image: prefecture,
					link: "https://prefecture-match.herokuapp.com",
					linkText: "Live Demo",
					github: "https://github.com/zachinjapan/prefecture-match",
					tech: "Tech",
					tags: ["React", "CSS", "JavaScript", "Heroku"],
					english: false,
					japanese: true,
				},
			],
		},
		Japanese: {
			mainTitle: "プロジェクト",
			projects: [
				{
					title: "マイ・アニメ・コレクション",
					description: "アニメの詳細を簡単に検索できるアプリケーションです。",
					image: anime,
					link: "https://www.my-anime-collection.com/landing",
					linkText: "ウェブサイト",
					github: "https://github.com/zachinjapan/my-anime-collection",
					tech: "技術",
					tags: [
						"React",
						"CSS",
						"Node",
						"API",
						"Authentication",
						"MongoDB",
						"Heroku",
					],
					youtube: "https://www.youtube.com/embed/D_lXDfCJf6k",
					english: true,
					japanese: true,
				},

				{
					title: "ザック・イン・ジャパン",
					description: "私のテクノロジーブログです。",
					image: blog,
					link: "https://zachinjapan.gatsbyjs.io",
					linkText: "ウェブサイト",
					github: "https://github.com/zachinjapan/my-gatsby-blog",
					tech: "技術",
					tags: [
						"Gatsby",
						"React",
						"CSS",
						"Markdown",

						"GraphQL",
						"Gatsby Cloud",
					],
					youtube: "https://www.youtube.com/embed/lt48zTXl6j0",
					english: true,
					japanese: false,
				},
				{
					title: `ハク`,
					description:
						"ハクは面接の過程でエントリ-した会社を追跡して比較できるアプリケーションです。",
					image: haku,
					link: "https://hataraku.herokuapp.com/",
					linkText: "ウェブサイト",
					github: "github.com/zachinjapan/haku",
					tech: "技術",
					tags: [
						"React",
						"CSS",
						"Node",
						"API",
						"Authentication",
						"MongoDB",
						"Heroku",
					],
					youtube: "https://www.youtube.com/embed/q1rVbqMw0ug",
					english: true,
					japanese: false,
				},
				{
					title: "リッフス",
					description:
						"新曲、カバー、音楽のアイデアを世界と共有するためのサイトです。",
					image: niceRiff,
					link: "https://riffs.netlify.app/",
					linkText: "ウェブサイト",
					github: "https://github.com/zachinjapan/vue-music-app",
					tech: "技術",
					tags: ["Vue", "CSS", "Firebase", "Authentication", "Netlify"],
					youtube: "https://www.youtube.com/embed/gBIhz-0Jkg8",
					english: true,
					japanese: true,
				},

				{
					title: "名言クイズ",
					description: "この名言を残した偉人の名前を選択してください。",
					image: quote,
					link: "https://quotequiz.netlify.app",
					linkText: "ウェブサイト",
					github: "https://github.com/zachinjapan/quotes",
					tech: "技術",
					tags: ["React", "CSS", "API", "Typescript", "Netlify"],
					english: true,
					japanese: false,
				},
				{
					title: "都道府県マッチング",
					description:
						"日本の都道府県を学ぶための、楽しいマッチングゲームです。",
					image: prefecture,
					link: "https://prefecture-match.herokuapp.com",
					linkText: "ウェブサイト",
					github: "https://github.com/zachinjapan/prefecture-match",
					tech: "技術",
					tags: ["React", "CSS", "JavaScript", "Heroku"],
					english: false,
					japanese: true,
				},
			],
		},
	};

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
