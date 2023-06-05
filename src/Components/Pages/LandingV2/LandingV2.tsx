import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MUINav from "../../UI/Navbar/MUINav";
import SocialLinksVertical from "../../UI/SocialLinksVertical";
import "animate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "../../../context/appContext";

const LandingV2 = () => {
	const { t, i18n } = useTranslation();
	const time = new Date().getHours();

	const { acceptApp, showApp } = useAppContext();
	let currGreeting = "";
	if (time < 12) {
		currGreeting = t("landing.morning");
	} else if (time >= 12 && time <= 18) {
		currGreeting = t("landing.afternoon");
	} else {
		currGreeting = t("landing.evening");
	}

	useEffect(() => {
		if (showApp && acceptApp) {
			toast.dark(t("toast.info"), {
				progress: undefined,
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				position: "bottom-right",
			});
		}
	}, [showApp, acceptApp, t]);

	return (
		<Landing>
			<ToastContainer />
			<MUINav />
			<div className="content">
				<LandingTile className="animate__animated animate__fadeIn">
					<div id="text">
						<div className="line">
							<p className="word">
								{`${currGreeting}${i18n.language === "en" ? " I'm " : " "}`}
							</p>
						</div>
						<div className="line">
							<p className="word" id="special-1">
								{t("landing.name")}
							</p>
						</div>
						<div className="line">
							<p className="word">{t("landing.description1")}</p>
						</div>
						<div className="line">
							<p className="word">{t("landing.description2")}</p>
						</div>
					</div>
				</LandingTile>
				<SocialLinksVertical />
			</div>
		</Landing>
	);
};

const Landing = styled.div`
	.content {
		height: 100%;
		justify-content: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.line {
		display: flex;
		justify-content: space-between;
	}

	.word {
		font-size: clamp(1.3rem, 6.5vw, 5rem);
		font-family: "Rubik", sans-serif;
		font-weight: 400;
		margin: 0rem;
		text-transform: uppercase;
		transition: opacity 250ms ease;
		opacity: 0.5;
		text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
			1px 1px 0 var(--off-white);
		color: black;
	}

	@media (max-width: 768px) {
		.word {
			color: var(--off-white);
			text-shadow: none;
		}
	}

	#special-1 {
		opacity: 1 !important;
		text-shadow: none !important;
		color: var(--off-white) !important;
	}

	#special-2 {
		color: gray !important;
		opacity: 0.5 !important;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;

	@media (max-width: 768px) {
		height: calc(100vh - 56px);
	}
`;

const LandingTile = styled.h1`
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	width: fit-content;
	max-width: 1000px;
	height: max-content;
	text-align: center;
	user-select: none;
	margin: 50px;
	font-size: 3rem;
	padding-bottom: 61px;

	@media (max-width: 1024px) {
		font-size: 2rem;
	}
`;

export default LandingV2;
