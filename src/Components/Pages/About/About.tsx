import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Skills from "../../UI/Skills";

const About = () => {
	const { t } = useTranslation();

	return (
		<AboutDiv className="about" id="About">
			<AboutInner className="about-inner">
				<AnimationOnScroll
					animateIn="animate__fadeIn"
					animateOnce
					offset={200}
					duration={3}
				>
					<AboutTitle>{t("about.title")}</AboutTitle>
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
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	color: var(--off-white);
	overflow: hidden;
	user-select: none;

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

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

const AboutTitle = styled.h1`
	text-align: center;
	padding-bottom: 1rem;
	text-decoration: underline;
	text-decoration-color: var(--secondary-color);
	text-decoration-thickness: 5px;
	text-underline-offset: 6px;
	text-decoration-skip-ink: none;
	overflow: hidden;
	margin-bottom: 50px;
`;

const AboutDescriptionWrapper = styled.div`
	padding-bottom: 1rem;
`;

const AboutDescription = styled.p`
	font-size: 1.5rem;

	@media (max-width: 1000px) {
		font-size: 1rem;
	}
`;

const AboutLink = styled.a`
	color: var(--secondary-color);
`;

export default About;
