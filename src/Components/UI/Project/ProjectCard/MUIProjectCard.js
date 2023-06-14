import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import "./ProjectCard.css";

import { FaReact } from "react-icons/fa";

import { IconContext } from "react-icons";
import { RiGatsbyFill } from "react-icons/ri";

import { RiVuejsFill } from "react-icons/ri";
import styled from "styled-components";
import Dot from "../../../../images/cursor-ring.png";
import { useAppContext } from "../../../../context/appContext";
import { Parallax, Background } from "react-parallax";

export default function MUIProjectCard(props) {
	const { theme } = useAppContext();
	return (
		<ProjectCard
			id="MUI-Card"
			className={props.github.slice(props.github.lastIndexOf("/") + 1)}
		>
			<div
				className=""
				style={{
					position: "relative",
				}}
			>
				<a
					href={props.link}
					target={"_blank"}
					rel="noreferrer"
					className="cardMediaTag"
				>
					<div
						className="card-title-div"
						style={{
							position: "absolute",
							top: "10px",
							left: "10px",
						}}
					>
						<h1
							className="card-title"
							style={{
								color: "var(--off-white)",
								fontSize: "4.7rem",
								fontWeight: "bold",
								textAlign: "left",

								margin: "0",
								padding: "0",

								opactiy: 1,
								zIndex: 1,
								// underline
								textDecoration: "underline",
								textDecorationColor: "var(--secondary-color)",
								textDecorationThickness: "10px",
								textDecorationStyle: "solid",
							}}
						>
							{props.title}
						</h1>
					</div>
					<Parallax
						blur={{ min: -1, max: 1 }}
						bgImage={props.image}
						bgImageAlt="the dog"
						strength={75}
						className={`darken-on-hover ${
							theme === "light" ? "light-mode" : "dark-mode"
						}`}
					>
						<div id="card-media" />
					</Parallax>

					<div
						style={{
							position: "absolute",
							bottom: "10px",
							right: "10px",
						}}
					>
						<IconContext.Provider
							value={{
								color: "var(--secondary-color)",
								className: "global-class-name sill-img",
								size: "40px",
							}}
						>
							{props.tags[0] === "React" ? (
								<FaReact />
							) : props.tags[0] === "Vue" ? (
								<RiVuejsFill />
							) : props.tags[0] === "Gatsby" ? (
								<RiGatsbyFill />
							) : null}
						</IconContext.Provider>
					</div>
				</a>
			</div>
		</ProjectCard>
	);
}

const ProjectCard = styled(Card)`
	box-shadow: none !important;
	.ReactModal__Overlay {
		overflow: auto !important;
		// black backgorund semi transparent
		background-color: rgba(0, 0, 0, 0.2) !important;
	}

	.cardMediaTag {
		cursor: url(${Dot}), 4, 4 pointer !important;
	}

	.light-mode {
		filter: brightness(1) !important;
	}

	.dark-mode {
		filter: brightness(0.9) !important;
	}

	#MUI-Card {
		width: 100%;
		min-width: 325;
		/* min-height: 520px; */
		overflow: auto;
		margin-top: 20px !important;
		margin-bottom: 20px !important;
		box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
		background-color: var(--black) !important;
		cursor: url(${Dot}), 4, 4 pointer !important;

		border-radius: 4px;
	}

	#card-media {
		width: 400px;
		/* min-width: 95vw; */
		height: 250px;
		cursor: url(${Dot}), 4, 4 pointer !important;
		border-radius: 4px;
		// contain image
		background-size: contain !important;
	}

	#MUI-Card:hover {
		transform: scale(1);
	}

	.MUI-icon {
		font-size: 3rem;
		margin-bottom: -25px;
	}

	@media (max-width: 455px) {
		#MUI-Card {
			width: 340px !important;
			background-color: transparent !important;
		}
	}

	@media (min-width: 456px) {
		#MUI-Card:hover {
			/* darken the card on hover */
			background-color: var(--black 0.1);
		}
	}

	@media (max-width: 800px) {
		.project-icons {
			display: none !important;
		}
	}

	@media (max-width: 1300px) {
		.project-flag-div {
			display: none !important;
		}

		.card-title-div {
			font-size: 1rem !important;
			display: block !important;
			position: relative !important;
			margin-bottom: 40px !important;
		}

		.card-title {
			font-size: 2.5rem !important;
			text-decoration-thickness: 4px !important;
			text-align: center !important;
		}

		#card-media:hover {
			opacity: 1;

			cursor: url(${Dot}), 4, 4 pointer !important;
		}

		.card-content-text {
			border: none !important;
		}

		#MUI-Card {
			border-radius: 4px;
		}

		.card-title-div {
			top: 0px !important;
			left: 0px !important;
		}
	}

	@media (min-width: 1301px) {
		.darken-on-hover:hover {
			opacity: 0.3 !important;
		}
		#MUI-Card {
			margin-left: 0px !important;
			margin-right: 0px !important;
			width: 100% !important;
			font-size: 1.2rem;
			height: 100%;
			min-height: 525px;
		}

		#card-media {
			width: 100%;
			height: 525px;
			image-rendering: pixelated;
			cursor: url(${Dot}), 4, 4 pointer !important;
		}

		.MuiCardHeader-title {
			font-size: 2rem !important;
		}

		.card-content {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: space-around;
		}

		.project-description {
			font-size: 1.25rem;
		}

		.icon-div {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
		}

		.card-content-text {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			max-width: 300px;
			height: 480px;
		}

		.MUI-icon:hover {
			transform: scale(1.5);
			transition: transform 0.5s ease-in-out;
			color: var(--secondary-color);
			transform: translateY(-5px);
		}

		#MUI-Card:hover {
			transform: scale(1);
		}

		@media (min-width: 1300px) {
			.MuiCardHeader-title {
				text-align: left;
			}

			#card-media {
				width: 1000px !important;
				max-width: 100% !important;
				cursor: url(${Dot}), 4, 4 pointer !important;
			}
		}
	}

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
	}

	.ReactModal__Overlay {
		// darken but don't hide the background
		/* background-color: rgba(0, 0, 0, 0.2) !important; */
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
