import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { MdPlayCircleFilled, MdPauseCircleFilled } from "react-icons/md";
import america from "../../../images/america-big.png";
import japan from "../../../images/japan-big.png";
import Dot from "../../../images/ring-pointer.png";
import { useAppContext } from "../../../context/appContext";
import { Box, Menu } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { MOBILE_BREAKPOINT } from "../../../utils/constants";

const NavBar = () => {
  const { useAudio, setAudioPreference} =
    useAppContext();
  const { i18n, t } = useTranslation();

  const isMobile = useMediaQuery({ query: MOBILE_BREAKPOINT });

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

  const handleOpenNavMenu = (event : any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === "en" ? "jp" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <CustomAppBar position="relative" className="nav-menu fade-in-on-mount">
        <Toolbar>
          <MobileMenu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <AiOutlineMenu size="2rem" />
            </IconButton>
            <MobileMenuContent
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
            >
              {links.map((link) => (
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
            </MobileMenuContent>
          </MobileMenu>

          <DesktopLinks>
            {links.map((link) => (
              <a
                key={link.link}
                href={link.link}
                style={{ textDecoration: "none" }}
              >
                <Button
                  color="inherit"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 1,
                    color: "var(--off-white)",
                    display: "block",
                  }}
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
          </DesktopLinks>
            
          <FlagDiv>
          {!isMobile && ( 
            <div onClick={() => setAudioPreference(!useAudio)}>
              {useAudio ? (
                <MdPauseCircleFilled className="flag" />
              ) : (
                <MdPlayCircleFilled className="flag" />
              )}
            </div>
          )}
            <div className="flag-div nav-button" onClick={handleLanguageChange}>
              {i18n.language === "en" ? (
                <div className="flag-div">
                  <div className="flag-div-holder">
                    <img
                      className="flag"
                      src={japan}
                      alt="Japan Flag"
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
                    />
                  </div>
                </div>
              )}
            </div>
          </FlagDiv>
        </Toolbar>
      </CustomAppBar>
    </>
  );
};

const CustomAppBar = styled(AppBar)`
  z-index: 100 !important;
  background-color: transparent !important;
  overflow: hidden;
  box-shadow: none !important;
  width: 100% !important;
`;

const MobileMenu = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuContent = styled(Menu)`
  display: block !important;
  @media (min-width: 768px) {
    display: none !important;
  }
`;

const DesktopLinks = styled(Box)`
  overflow: visible;
  flex-grow: 1;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const FlagDiv = styled(Box)`
  position: fixed;
  right: 16px;
  display: flex;
  gap: 8px;
  user-select: none;
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
  @media (min-width: 1600px) {
    .flag {
      width: 45px;
      height: 35px;
    }
  }
`;

export default NavBar;
