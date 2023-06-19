import React, { useEffect, useRef, useState } from "react";
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
	const [isVisible, setIsVisible] = useState(false);
	const titleRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.5 } // Adjust the threshold as needed
		);

		observer.observe(titleRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div
			id="MUI-Card"
			className={props.github.slice(props.github.lastIndexOf("/") + 1)}
		>
			<a
				href={props.link}
				target="_blank"
				rel="noreferrer"
				className="cardMediaTag"
			>
				<div
					className={`card-title-div ${
						isVisible ? "fade-in" : "fade-in-hidden"
					} ${theme === "light" ? "light-mode" : "dark-mode"}`}
					ref={titleRef}
				>
					<h1 className="card-title">{props.title}</h1>
				</div>
				<Parallax
					bgImage={props.image}
					bgImageAlt={`${props.title} image`}
					strength={75}
					className={`darken-on-hover ${
						theme === "light" ? "light-mode" : "dark-mode"
					}`}
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
