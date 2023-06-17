import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import { FaReact } from "react-icons/fa";

import { IconContext } from "react-icons";
import { RiGatsbyFill } from "react-icons/ri";

import { RiVuejsFill } from "react-icons/ri";
import styled from "styled-components";
import Dot from "../../../../images/cursor-ring.png";
import { useAppContext } from "../../../../context/appContext";
import { Parallax, Background } from "react-parallax";
import "../../Project/Project.css";

export default function MUIProjectCard(props) {
	const { theme } = useAppContext();
	return (
		<div
			id="MUI-Card"
			// if we want to add styling based on the project.
			className={props.github.slice(props.github.lastIndexOf("/") + 1)}
		>
			<a
				href={props.link}
				target={"_blank"}
				rel="noreferrer"
				className="cardMediaTag"
			>
				<div className="card-title-div">
					<h1
						className="card-title"
						style={{
							fontSize: "4.7rem",
							fontWeight: "bold",
							textAlign: "left",

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
					bgImageAlt={`${props.title} image`}
					strength={75}
					className={`darken-on-hover ${
						theme === "light" ? "light-mode" : "dark-mode"
					}`}
					// contain not cover
					bgImageStyle={{
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						filter: "brightness(0.85)",
						borderRadius: "20px",
						width: "100%",
					}}
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
	);
}
