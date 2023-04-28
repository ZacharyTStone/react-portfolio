import styled from "styled-components";

import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { IconContext } from "react-icons";

const SocialLinksVertical = () => {
	return (
		<IconContext.Provider
			value={{
				color: "white",
				className: "global-class-name",
				size: "30px",
			}}
		>
			<Wrapper>
				<div className="social-links-vertical animate__animated animate__fadeInLeft">
					<div
						style={{
							position: "relative",
						}}
						className="social-link"
					>
						<a
							href="https://www.linkedin.com/in/ZacharyStone42"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsLinkedin className="social-link-img" />
							<div className="social-link-text">
								<span className="social-link-text-span">LinkedIn</span>
							</div>
						</a>
					</div>
					<div
						style={{
							position: "relative",
						}}
						className="social-link"
					>
						<a
							href="https://github.com/ZacharyTStone"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiOutlineGithub className="social-link-img" />
							<div className="social-link-text">
								<span className="social-link-text-span">Github</span>
							</div>
						</a>
					</div>
					<div
						style={{
							position: "relative",
						}}
						className="social-link"
					>
						<a
							href="mailto:Zach.Stone.Developer@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link"
						>
							<AiTwotoneMail className="social-link-img" />
							<div className="social-link-text">
								<span className="social-link-text-span">Email</span>
							</div>
						</a>
					</div>
				</div>
			</Wrapper>
		</IconContext.Provider>
	);
};

const Wrapper = styled.div`
	.social-links-vertical {
		position: fixed;
		left: 0px;
		bottom: 10px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		width: 75px;
		height: fit-content;
		border-radius: 20px;
		z-index: 100;
	}

	.social-links-vertical a {
		padding: 10px;
		color: var(--secondary-color);
	}

	.social-links-vertical .social-link-img:hover {
		color: var(--secondary-color) !important;
	}

	.social-links-vertical a:hover .social-link-text {
		color: "var(--secondary-color)" !important;
	}

	.social-link-text {
		display: none;
		position: absolute;
		left: 50px;
		bottom: 20px;
		width: 75px;
		height: 20px;
		background-color: var(--black);
		border-radius: 0px 0px 20px 20px;
		color: var(--secondary-color);
		font-size: 0.8rem;
		text-align: center;
		padding-top: 5px;
	}

	@media (max-width: 1000px) {
		.social-link-text {
			left: -10px;
			bottom: -25px;
		}
	}

	.social-link {
		font-size: 1.5rem;
		text-decoration: none !important;
		text-align: end;
		color: "var(--secondary-color)" !important;
		padding-bottom: 15px;
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

	.social-link-img:hover {
		-webkit-transform: scale(1.2);
		-ms-transform: scale(1.2);
		transform: scale(1.2);
	}
`;

export default SocialLinksVertical;
