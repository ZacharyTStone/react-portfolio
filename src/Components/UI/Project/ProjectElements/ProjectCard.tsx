import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiGatsbyFill } from "react-icons/ri";
import { RiVuejsFill } from "react-icons/ri";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";
import "../../Project/Project.css";
import { useMediaQuery } from "react-responsive";

interface MUIProjectCardProps {
	link?: string;
	github?: string;
	title?: string;
	image?: string;
	tags?: string[];
}

export default function MUIProjectCard(props: MUIProjectCardProps) {
	const [isVisible, setIsVisible] = useState(false);
	const titleRef = useRef<HTMLDivElement>(null);

	const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

	const isGoldProject =
		props?.github?.slice(props?.github?.lastIndexOf("/") + 1) ===
		"my-anime-collection";

	const highlightGoldProjects = true;

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

		if (titleRef.current) {
			observer.observe(titleRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div id="MUI-Card">
			<a
				href={props.link}
				target="_blank"
				rel="noreferrer"
				className="cardMediaTag"
			>
				<div
					className={`card-title-div ${
						isVisible ? "fade-in" : "fade-in-hidden"
					} ${"dark-mode"}`}
					ref={titleRef}
				>
					<h1 className={`card-title`}>{props.title}</h1>
				</div>
				<Parallax
					bgImage={props.image}
					bgImageAlt={`${props.title} image`}
					strength={isMobile ? 0 : 75}
					className={`darken-on-hover dark-mode`}
					bgImageStyle={{
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						filter: "brightness(0.85)",
						borderRadius: "20px",
						width: "100%",
					}}
				>
					<div
						id="card-media"
						className={
							isGoldProject && highlightGoldProjects ? "gold-border" : ""
						}
					/>
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
						{!!props?.tags && props.tags[0] === "React" ? (
							<FaReact
								color={
									isGoldProject && highlightGoldProjects
										? "gold"
										: "var(--secondary-color)"
								}
							/>
						) : !!props?.tags && props.tags[0] === "Vue" ? (
							<RiVuejsFill
								color={
									isGoldProject && highlightGoldProjects
										? "gold"
										: "var(--secondary-color)"
								}
							/>
						) : !!props?.tags && props.tags[0] === "Gatsby" ? (
							<RiGatsbyFill
								color={
									isGoldProject && highlightGoldProjects
										? "gold"
										: "var(--secondary-color)"
								}
							/>
						) : null}
					</IconContext.Provider>
				</div>
			</a>
		</div>
	);
}
