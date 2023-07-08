import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { IconContext } from "react-icons";
import styled from "styled-components";

const SocialLinks = () => {
	return (
		<IconContext.Provider
			value={{
				color: "var(--off-white)",
				className: "global-class-name",
				size: "40px",
			}}
		>
			<Main className="social-links">
				<a
					href="https://www.linkedin.com/in/ZacharyStone42"
					target="_blank"
					rel="noopener noreferrer"
					className="social-link"
				>
					<BsLinkedin className="social-link-img" />
				</a>
				<a
					href="https://github.com/ZacharyTStone"
					target="_blank"
					rel="noopener noreferrer"
					className="social-link"
				>
					<AiOutlineGithub className="social-link-img" />
				</a>
				<a
					href="mailto:Zach.Stone.Developer@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social-link"
				>
					<AiTwotoneMail className="social-link-img" />
				</a>
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
		.social-links {
			width: 100%;
		}
	}


`;
export default SocialLinks;
