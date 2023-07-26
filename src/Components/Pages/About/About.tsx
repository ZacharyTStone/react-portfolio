import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Skills from "../../UI/Skills";
import { Title } from "../../UI/StyledComponents";

const About = () => {
	const { t } = useTranslation();

	return (
		<AboutDiv className="about" id="About">
			{/* <Title>{t("about.title")}</Title> */}
			<AboutInner className="about-inner">
				<AnimatedDescriptionWrapper
					animateIn="animate__fadeIn"
					animateOnce
					offset={200}
					duration={3}
				>
					<AnimatedDescription>{t("about.description1")}</AnimatedDescription>
					<AnimatedDescription>{t("about.description2")}</AnimatedDescription>
					<AnimatedDescription>
						{t("about.description3a")}
						<AboutLink
							href="https://www.rapptrlabs.com/"
							target="_blank"
							rel="noreferrer"
						>
							{t("about.currentCompany")}
						</AboutLink>
						{t("about.description3b")}
					</AnimatedDescription>
					<AnimatedDescription style={{ wordBreak: "break-word" }}>
						{t("about.description4")}
					</AnimatedDescription>
					<AnimatedDescription>{t("about.description5")}</AnimatedDescription>
				</AnimatedDescriptionWrapper>

				<AnimatedSkills
					animateIn="animate__fadeIn"
					animateOnce
					offset={250}
					duration={2}
				>
					<Skills />
				</AnimatedSkills>
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
	width: 40vw;
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

const AnimatedDescriptionWrapper = styled(AnimationOnScroll)`
	padding-bottom: 1rem;
`;

const AnimatedDescription = styled.p`
	font-size: 1.5rem;
	text-align: left;

	@media (max-width: 1000px) {
		font-size: 1.2rem;
	}
`;

const AboutLink = styled.a`
	color: var(--secondary-color);
`;

const AnimatedSkills = styled(AnimationOnScroll)``;

export default About;
