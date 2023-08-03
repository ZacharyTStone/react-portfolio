import React from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useAppContext } from "../../context/appContext";

const socialLinksData = [
	{
		href: "https://github.com/ZacharyTStone",
		icon: <AiOutlineGithub className="social-link-img" />,
		text: "Github",
	},
	{
		href: "mailto:Zach.Stone.Developer@gmail.com",
		icon: <AiTwotoneMail className="social-link-img" />,
		text: "Email",
	},
	{
		href: "https://www.linkedin.com/in/ZacharyStone42",
		icon: <BsLinkedin className="social-link-img" />,
		text: "LinkedIn",
	},
];

const SocialLink = ({
	href,
	icon,
	text,
}: {
	href: string;
	icon: JSX.Element;
	text: string;
}) => {
	return (
		<SocialLinkWrapper>
			<a href={href} target="_blank" rel="noopener noreferrer">
				{icon}
				<SocialLinkText>
					<span>{text}</span>
				</SocialLinkText>
			</a>
		</SocialLinkWrapper>
	);
};

const SocialLinksVertical = () => {

	const {showApp} = useAppContext();
	return (
		<IconContext.Provider
			value={{
				color: "var(--off-white)",
				className: "global-class-name",
				size: "30px",
			}}
		>
			<SocialLinksVerticalWrapper>
				<div className={`social-links-vertical ${showApp ? 'animate__animated animate__fadeInLeft' :''}`}
				>
					{socialLinksData.map(({ href, icon, text }, index) => (
						<SocialLink key={index} href={href} icon={icon} text={text} />
					))}
				</div>
			</SocialLinksVerticalWrapper>
		</IconContext.Provider>
	);
};

const SocialLinksVerticalWrapper = styled.div`

    display: flex;
    justify-content: center;

	.social-links-vertical {
		position: fixed;
		left: 0;
		bottom: 10px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		width: 75px;
		height: fit-content;
		border-radius: 20px;
		z-index: 100;

		a {
			padding: 10px;
			color: var(--secondary-color);
		}
	}

	@media (max-width: 1200px) {
		.social-links-vertical {
			display: flex;
			position: relative;
			flex-direction: row;
			align-items: center;
			width: 80%;
			height: auto;
			left: 0%;
			margin-top: 20px;
		}
	}
`;

const SocialLinkWrapper = styled.div`
	position: relative;
	font-size: 1.5rem;
	text-decoration: none !important;
	text-align: end;
	color: var(--secondary-color) !important;
	padding-bottom: 15px;

	&:hover .social-link-img {
		transform: scale(1.2);
	}
`;

const SocialLinkText = styled.div`
	display: none;
	position: absolute;
	left: 50px;
	bottom: 20px;
	width: 75px;
	height: 20px;
	background-color: var(--black);
	border-radius: 0 0 20px 20px;
	color: var(--secondary-color);
	font-size: 0.8rem;
	text-align: center;
	padding-top: 5px;

	${SocialLinkWrapper}:hover & {
		color: var(--secondary-color) !important;
	}

	@media (max-width: 1000px) {
		left: -10px;
		bottom: -25px;
	}
`;

export default SocialLinksVertical;
