import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MUINav from "../../UI/Navbar/MUINav";
import SocialLinksVertical from "../../UI/SocialLinksVertical";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import { createGreeting } from "../../../utils/misc";
import { AiOutlineDown } from "react-icons/ai";
import { useAppContext } from "../../../context/appContext";
const LandingV2 = () => {
	const { t, i18n } = useTranslation();
	const { showApp } = useAppContext();

	return (
		<Landing>
			<MUINav />
			<ContentWrapper className="content fade-in-on-mount">
				<LandingTile>
					<>
						<Line>
							<Word>
								{`${t(createGreeting())}${
									i18n.language === "en" ? " I'm " : " "
								}`}
							</Word>
						</Line>
						<Line>
							<Word className="glowing-text" id="special-1">
								{t("landing.name")}
							</Word>
						</Line>
						<Line>
							<Word>{t("landing.description1")}</Word>
						</Line>

						<Line>
							<Word>{t("landing.description2")}</Word>
						</Line>
					</>
				</LandingTile>
				<SocialLinksVertical />
			</ContentWrapper>
			<div
				className="down-icon-container"
				onClick={() => {
					// scroll so #About is into view smoothly
					document
						.querySelector("#About")
						?.scrollIntoView({ behavior: "smooth", block: "start" });
				}}
			>
				<AiOutlineDown
					size={50}
					className="down-icon"
					style={{ color: "var(--off-white)" }}
				/>
			</div>
		</Landing>
	);
};

const Landing = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 100vh;

	@media (max-width: 768px) {
		height: calc(100vh - 56px);
	}

	.down-icon-container {
		position: absolute;
		left: calc(50% - 25px);
		z-index: 9999;
		bottom: 50px;
	}

	.down-icon {
		background: transparent;
		background-size: cover;
		border-radius: 50%;
		transition: transform 0.3s ease-in-out;
		animation: moveDown 3s infinite;
	}

	@keyframes moveDown {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(20px); /* Adjust the distance the icon moves */
		}
		100% {
			transform: translateY(0);
		}
	}
`;

const ContentWrapper = styled.div`
	height: 100%;
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	#special-1 {
		opacity: 1 !important;
		color: var(--off-white) !important;
		text-shadow: 0 0 20px rgba(255, 255, 255, 0.8) !important;
	}
`;

const Line = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Word = styled.p`
	font-size: clamp(2rem, 8vw, 6rem);
	font-family: "Rubik", sans-serif;
	font-weight: 400;
	margin: 0rem;
	text-transform: uppercase;
	opacity: 0.7;
	text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
		1px 1px 0 var(--off-white);
	color: black;
	white-space: nowrap;
`;

const LandingTile = styled.h3`
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	width: fit-content;
	height: max-content;
	text-align: center;
	user-select: none;
	margin: 50px;
	font-size: 3rem;
	padding-bottom: 61px;
	background: rgba(0, 0, 0, 0.09);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 20px;
	padding: 20px;
	width: fit-content;

	@media (max-width: 768px) {
		background: rgba(0, 0, 0, 0.3);
		padding: 5px;
	}

	@media (max-width: 1024px) {
		font-size: 2.5rem;
	}
`;

export default LandingV2;
