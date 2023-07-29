import React, { useState } from "react";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import Modal from "react-modal";
import MUIProjectCard from "./ProjectElements/ProjectCard";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import america from "../../../images/america-big.png";
import japan from "../../../images/japan-big.png";
import styled from "styled-components";
import { useAppContext } from "../../../context/appContext";
import ProjectModalContent from "./ProjectElements/ProjectModal";

const customStyles = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.75)",
	},
	content: {
		top: "40%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -35%)",
		border: "solid 5px var(--secondary-color)",
		borderRadius: "10px",
		maxWidth: "90vw",
		maxHeight: "90vh",
		background: "transparent",
		padding: "10px",
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root") as HTMLElement);

export interface ProjectProps {
	project: {
		index?: string;
		title?: string;
		image?: string;
		github?: string;
		tags?: string[];
		english?: boolean;
		japanese?: boolean;
		youtube?: string;
		description?: string;
		link?: string;
	};
}

function Project({ project }: ProjectProps) {
	// not currently used but could be used to show a loading spinner
	const [isLoading, setIsLoading] = useState(true);

	const { useAudio, setAudioPreference } = useAppContext();
	const handleOnLoad = () => {
		setIsLoading(false);
	};

	// @ts-ignore
	const TagButton = styled(Button)(() => ({
		color: "var(--secondary-color)",
		backgroundColor: "var(--off-white)",
		disabled: true,
	}));

	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);

		// lock the scroll
		document.body.style.overflow = "hidden";
	}

	function afterOpenModal() {}

	function closeModal() {
		setIsOpen(false);
		// unlock the scroll
		document.body.style.overflow = "unset";
	}

	return (
		<div>
			<div onClick={openModal}>
				<MUIProjectCard
					title={project?.title}
					image={project?.image}
					github={project?.github}
					tags={project?.tags}
				/>
			</div>

			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Project Modal"
			>
				<ProjectModalContent
					project={project}
					setIsOpen={setIsOpen}
				/>
			</Modal>
		</div>
	);
}

export default Project;
