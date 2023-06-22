import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Skills from "../../UI/Skills";

const About = () => {
	const { t } = useTranslation();

	return (
		<AboutDiv className="about" id="About">
			<AboutTitle>{t("about.title")}</AboutTitle>

			<AboutInner className="about-inner">
				<AnimationOnScroll
					animateIn="animate__fadeIn"
					animateOnce
					offset={200}
					duration={3}
				>
					<AboutDescriptionWrapper>
						<AboutDescription>{t("about.description1")}</AboutDescription>
						<AboutDescription>{t("about.description2")}</AboutDescription>
						<AboutDescription>
							{t("about.description3a")}
							<AboutLink
								href="https://www.rapptrlabs.com/"
								target="_blank"
								rel="noreferrer"
							>
								{t("about.currentCompany")}
							</AboutLink>
							{t("about.description3b")}
						</AboutDescription>
						<AboutDescription style={{ wordBreak: "break-word" }}>
							{t("about.description4")}
						</AboutDescription>
						<AboutDescription>{t("about.description5")}</AboutDescription>
					</AboutDescriptionWrapper>
				</AnimationOnScroll>

				<AnimationOnScroll
					animateIn="animate__fadeIn"
					animateOnce
					offset={250}
					duration={2}
				>
					<Skills />
				</AnimationOnScroll>
			</AboutInner>
		</AboutDiv>
	);
};

const AboutDiv = styled.div`
	width: 85vw;
	margin: auto;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--off-white);
	overflow: hidden;
	user-select: none;
	margin-bottom: 100px;

	.contributions_chart {
		display: flex;
		justify-content: center;
	}

	@media (max-width: 1000px) {
		width: 90%;
		padding: 10px;
	}
`;

const AboutInner = styled.div`
	width: 50%;
	backdrop-filter: blur(5px) !important;
	-webkit-backdrop-filter: blur(10px) !important;
	padding: 30px;
	border-radius: 20px;
	background: rgba(0, 0, 0, 0.5);

	@media (max-width: 1000px) {
		width: 100%;
		padding: 10px;
	}
`;

const AboutTitle = styled.h2`
	text-align: center;
	padding-bottom: 1rem;
	text-decoration: underline;
	text-decoration-color: var(--secondary-color);
	text-decoration-thickness: 5px;
	text-underline-offset: 6px;
	text-decoration-skip-ink: none;
	overflow: hidden;
	margin-bottom: 50px;
	position: relative;
	font-size: 2rem;
`;

const AboutDescriptionWrapper = styled.div`
	padding-bottom: 1rem;
`;

const AboutDescription = styled.p`
	font-size: 1.5rem;

	text-align: left;

	@media (max-width: 1000px) {
		font-size: 1.2rem;
	}
`;

const AboutLink = styled.a`
	color: var(--secondary-color);
`;

export default About;
