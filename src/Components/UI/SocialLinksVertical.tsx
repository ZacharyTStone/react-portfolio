import "./SocialLinksVertical.css";

import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
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
						href="https://twitter.com/zachstonewebdev"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiFillTwitterCircle className="social-link-img" />
						<div className="social-link-text">
							<span className="social-link-text-span">Twitter</span>
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
		</IconContext.Provider>
	);
};

export default SocialLinksVertical;