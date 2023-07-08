import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import america from "../../../images/america-big.png";
import japan from "../../../images/japan-big.png";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Dot from "../../../images/ring-pointer.png";
import { MdPlayCircleFilled, MdPauseCircleFilled } from "react-icons/md";
import { useAppContext } from "../../../context/appContext";

const MUINav = () => {
	const { useAudio, setAudioPreference, enableParticles, setEnableParticles } =
		useAppContext();

	const { i18n, t } = useTranslation();

	const links = [
		{
			name: t("nav.home"),
			link: "/",
		},
		{
			name: t("nav.about"),
			link: "/#About",
		},
		{
			name: t("nav.projects"),
			link: "/#Projects",
		},

		{
			name: t("nav.blog"),
			link: "/#Blog",
		},
	];

	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event: any) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<Nav position="relative" className="nav-menu">
				<Toolbar>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							disableScrollLock={true}
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{links.map((link: { name: string; link: string }) => (
								<a
									href={link.link}
									style={{ textDecoration: "none" }}
									key={link.name}
									className="nav-menu-item"
								>
									<MenuItem
										onClick={handleCloseNavMenu}
										sx={{
											my: 1,
											color: "var(--secondary-color)",
											display: "block",
										}}
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											cursor: `url(${Dot}), 4, 4 pointer !important`,
										}}
									>
										{link.name}
									</MenuItem>
								</a>
							))}
						</Menu>
					</Box>

					<Box
						overflow="visible"
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex", lg: "flex" },
						}}
					>
						{links.map((link: any) => (
							<a
								key={Math.random()}
								href={link.link}
								style={{ textDecoration: "none" }}
							>
								<Button
									color="inherit"
									onClick={handleCloseNavMenu}
									sx={{ my: 1, color: "var(--off-white)", display: "block" }}
									style={{
										fontSize: "1.2rem",
										marginLeft: "10px",
										marginRight: "10px",
									}}
									className="nav-menu-item"
								>
									{link.name}
								</Button>
							</a>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }} className="full-flag-div">
						<div
							onClick={() => {
								setAudioPreference(!useAudio);
							}}
						>
							{useAudio ? (
								<MdPauseCircleFilled className="flag" />
							) : (
								<MdPlayCircleFilled className="flag" />
							)}
						</div>
						<div className="flag-div nav-button">
							{i18n.language === "en" ? (
								<div className="flag-div">
									<div className="flag-div-holder">
										<img
											className="flag"
											src={japan}
											alt="Japan Flag"
											onClick={() => i18n.changeLanguage("jp")}
										/>
									</div>
								</div>
							) : (
								<div className="jp">
									<div className="flag-div-holder">
										<img
											className="flag"
											src={america}
											alt="America Flag"
											onClick={() => i18n.changeLanguage("en")}
										/>
									</div>
								</div>
							)}
						</div>
					</Box>
				</Toolbar>
			</Nav>
		</>
	);
};

const Nav = styled(AppBar)`
	z-index: 100 !important;
	background-color: transparent !important;
	overflow: hidden;
	box-shadow: none !important;
	width: 100% !important;

	.nav-menu-item:hover {
		background-color: transparent !important;
		color: var(--secondary-color) !important;
		cursor: url(${Dot}), 4, 4 pointer !important;
	}

	.nav-menu-item {
		cursor: url(${Dot}), 4, 4 pointer !important;
	}

	.full-flag-div {
		position: fixed;
		right: 16px;
		display: flex;
		gap: 8px;
		user-select: none;
	}
	.flag-div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.flag {
		width: 45px;
		height: 35px;
		cursor: url(${Dot}), auto !important;
	}

	/*  mobile */
	@media (max-width: 768px) {
		.nav {
			position: fixed !important;
			opacity: 0.8;
		}
	}

	@media (min-width: 1600px) {
		.flag {
			width: 45px;
			height: 35px;
		}
	}
`;
export default MUINav;
