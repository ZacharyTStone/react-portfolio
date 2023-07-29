import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";

const socialLinksData = [
	{
		href: "https://www.linkedin.com/in/ZacharyStone42",
		icon: <BsLinkedin className="social-link-img" />,
	},
	{
		href: "https://github.com/ZacharyTStone",
		icon: <AiOutlineGithub className="social-link-img" />,
	},
	{
		href: "mailto:Zach.Stone.Developer@gmail.com",
		icon: <AiTwotoneMail className="social-link-img" />,
	},
];

const SocialLinksHorizontal = () => {
	const { showApp } = useAppContext();
	return (
		<IconContext.Provider
			value={{
				color: "var(--off-white)",
				className: "global-class-name",
				size: "40px",
			}}
		>
			<Main className={`social-links ${showApp ? 'animate__animated animate__fadeInLeft' :''}`}>
				{socialLinksData.map((linkData, index) => (
					<SocialLink key={index} href={linkData.href}>
						{linkData.icon}
					</SocialLink>
				))}
			</Main>
		</IconContext.Provider>
	);
};

const Main = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	max-width: 400px;
	width: 100%;
	height: auto;

	@media (max-width: 455px) {
		.social-link {
			margin: 10px;
		}
	}
	@media (max-width: 600px) {
		width: 100%;
	}
`;

const SocialLink = styled.a`
	&.social-link {
		color: var(--secondary-color);
		text-decoration: none;
		margin: 0;
		padding: 0;

		&:hover .social-link-img {
			transform: scale(1.2);
		}
	}
`;

export default SocialLinksHorizontal;
