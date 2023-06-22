import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import SocialLinks from "../../UI/SocialLinks";

const Footer = () => {
	const { t } = useTranslation();
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterText isTabletOrMobile={isTabletOrMobile}>
					{isTabletOrMobile ? (
						<MobileContainer>
							<SocialLinks />
						</MobileContainer>
					) : (
						<DesktopContainer>
							<BsArrowLeft
								color="var(--secondary-color)"
								size="1.5rem"
								style={{ marginRight: "16px" }}
							/>
							<span>
								{t("footer.thanks")}
								<span style={{ color: "var(--secondary-color)" }}>
									{t("footer.contact")}
								</span>
							</span>
						</DesktopContainer>
					)}
				</FooterText>
			</FooterWrapper>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	background-color: transparent;
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: flex-start;
	padding-bottom: 10px;
`;

const FooterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const FooterText = styled.div<{ isTabletOrMobile: boolean }>`
	display: flex;
	align-items: center;
	color: var(--off-white);
	margin-left: 16px;
	user-select: none;

	background-color: ${(props) =>
		props.isTabletOrMobile ? "rgba(0, 0, 0, 0.2)" : "transparent"};
	backdrop-filter: ${(props) =>
		props.isTabletOrMobile ? "blur(10px)" : "none"};
	border-radius: ${(props) => (props.isTabletOrMobile ? "10px" : "none")};
	padding: ${(props) => (props.isTabletOrMobile ? "10px" : "none")};
`;

const MobileContainer = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(10px);
	border-radius: 10px;
	padding: 10px;
	display: flex;
	gap: 8px;
	justify-content: space-around;
	width: 100%;
`;

const DesktopContainer = styled.div`
	margin-left: 74px;
	display: flex;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(10px);
	border-radius: 10px;
	padding: 10px;
	transform: translateY(-10px);
`;

export default Footer;
