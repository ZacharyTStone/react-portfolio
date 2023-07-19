import { Modal } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import america from "../../../../images/america-big.png";
import japan from "../../../../images/japan-big.png";
import styled from "styled-components";
import { useAppContext } from "../../../../context/appContext";
import { useState } from "react";
import { Button } from "@mui/material";
import { ProjectProps } from "../Project";

interface CustomModalStyles {
	overlay: React.CSSProperties;
	content: React.CSSProperties;
}

const ProjectModalContent = ({
	modalIsOpen,
	setIsOpen,
	project,
}: {
	modalIsOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	project: ProjectProps["project"];
}) => {
	const handleOnLoad = () => {
		setIsLoading(false);
	};

	// not currently used but could be used to show a loading spinner
	const [isLoading, setIsLoading] = useState(true);

	const { useAudio, setAudioPreference } = useAppContext();

	function closeModal() {
		setIsOpen(false);
		// unlock the scroll
		document.body.style.overflow = "unset";
	}

	// @ts-ignore
	const TagButton = styled(Button)(() => ({
		color: "var(--secondary-color)",
		backgroundColor: "var(--off-white)",
		disabled: true,
	}));
	return (
		<>
			<Card id="card-modal" style={{ backgroundColor: "transparent" }}>
				<div
					className="card-content"
					style={{
						overflow: "auto",
					}}
				>
					{project.youtube ? (
						<div>
							{project.youtube && (
								<iframe
									id="card-media"
									width="100%"
									height="fit-content"
									src={project.youtube}
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="forced-ring-cursor"
									style={{
										cursor: "url(../../images/cursor-pointer.png), auto",
										display: "block",
									}}
									onLoad={handleOnLoad}
								/>
							)}
						</div>
					) : (
						<CardMedia
							id="card-media"
							image={project.image}
							style={{
								filter: "brightness(0.85)",
								borderRadius: "20px",
							}}
						/>
					)}

					<CardContent className="card-content-text">
						<Typography variant="body2" color="var(--off-white)">
							<Description>{project.description}</Description>
						</Typography>
						<CardActions disableSpacing className="icon-div">
							<div>
								<IconButton aria-label="github link">
									<a href={project.github} target="_blank" rel="noreferrer">
										<AiFillGithub
											className="MUI-icon"
											style={{
												color: "var(--off-white)",
											}}
										/>
									</a>
								</IconButton>
								<IconButtonText>Code</IconButtonText>
							</div>
							<div>
								<IconButton
									aria-label="live-demo"
									onClick={() => {
										setAudioPreference(false);
									}}
								>
									<a href={project.link} target="_blank" rel="noreferrer">
										<RiComputerLine
											className="MUI-icon"
											style={{
												color: "var(--off-white)",
											}}
										/>
									</a>
								</IconButton>
								<IconButtonText>Site</IconButtonText>
							</div>
						</CardActions>
						<Typography paragraph align="left">
							{project?.tags?.map((tag: any) => (
								<TagButton
									disabled={true}
									key={tag}
									style={{
										background: "var(--secondary-color-dark)",
										color: "var(--off-white)",
										marginRight: "10px",
										marginBottom: "10px",
									}}
								>
									{tag}
								</TagButton>
							))}
							<div
								className="project-flag-div"
								style={{
									display: "flex",
									justifyContent: "initial",
								}}
							>
								{project.japanese ? (
									<div>
										<img
											className="flag"
											src={japan}
											alt="Japan Flag"
											style={{
												filter: "brightness(0.85)",
												marginRight: "10px",
												marginTop: "10px",
												width: "50px",
												height: "40px",
											}}
										></img>
									</div>
								) : null}
								{project.english ? (
									<div>
										<img
											className="flag"
											src={america}
											alt="America Flag"
											style={{
												filter: "brightness(0.85)",
												marginRight: "10px",
												marginTop: "10px",
												width: "50px",
												height: "40px",
											}}
										></img>
									</div>
								) : null}
							</div>
						</Typography>
					</CardContent>
				</div>
			</Card>

			<IconButton
				aria-label="close modal"
				style={{
					position: "absolute",
					bottom: "30px",
					right: "15px",
				}}
			>
				<div>
					<AiFillCloseCircle
						color="var(--secondary-color)"
						size={50}
						onClick={closeModal}
					/>
				</div>
			</IconButton>
		</>
	);
};

const IconButtonText = styled.h5`
	font-size: 1.2rem;
	color: var(--off-white);
	text-decoration: none;
	text-align: center !important;

	@media (max-width: 1300px) {
		font-size: 1rem;
		color: var(--off-white);
		text-decoration: none;
		text-align: center !important;
	}
`;

const Description = styled.p`
	font-size: 1.2rem;
	color: var(--off-white);
	text-decoration: none;

	//glassmorphism background
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	padding: 10px;

	@media (max-width: 1300px) {
		font-size: 1rem;
		color: var(--off-white);
		text-decoration: none;
	}
`;
export default ProjectModalContent;
