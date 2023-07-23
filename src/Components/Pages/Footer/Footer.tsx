import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import SocialLinksHorizontal from "../../UI/SocialLinksHorizontal";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
	const { t } = useTranslation();
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterText isTabletOrMobile={isTabletOrMobile}>
					{isTabletOrMobile ? (
						<MobileContainer>
							<SocialLinksHorizontal />
						</MobileContainer>
					) : (
						<DesktopContainer>
							<TextDiv>
								<BsArrowLeft
									color="var(--secondary-color)"
									size="1.5rem"
									style={{ marginRight: "16px" }}
								/>
								<span>
									{t("footer.thanks")}
									<span
										style={{
											color: "var(--secondary-color)",
											marginLeft: "8px",
										}}
									>
										{t("footer.contact")}
									</span>
								</span>
							</TextDiv>
							<TextDiv>
								<span>{t("footer.tech")}</span>
								<a
									href="https://github.com/ZacharyTStone/react-portfolio"
									target="_blank"
									rel="noreferrer"
									style={{
										textDecoration: "none",
										color: "var(--secondary-color)",
									}}
								>
									<AiFillGithub
										size="30px"
										style={{
											marginTop: "8px",
										}}
									/>
								</a>
							</TextDiv>
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

const TextDiv = styled.div`
	display: flex;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(10px);
	border-radius: 10px;
	padding: 10px;
	gap: 8px;
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
	transform: translateY(8px);
	width: 100%;
	padding: 10px;
	justify-content: space-between;
`;

export default Footer;
