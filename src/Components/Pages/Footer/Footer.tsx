import SocialLinks from "../../UI/SocialLinks";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { BsArrowLeft } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

	return (
		<Main>
			<footer>
				<div className="footer-text">
					<span>
						{isTabletOrMobile && (
							<>
								<span>Thank for looking at my portfolio.</span>
								<span
									style={{
										color: "var(--secondary-color)",
									}}
								>
									Let's connect!
								</span>
							</>
						)}
						{!isTabletOrMobile && (
							<div
								style={{
									marginLeft: "74px",

									display: "flex",
									alignItems: "center",
								}}
							>
								<BsArrowLeft
									color="var(--secondary-color)"
									size="1.5rem"
									style={{
										marginRight: "16px",
									}}
								/>
								<span>
									{t("footer.thanks")}&nbsp;
									<span
										style={{
											color: "var(--secondary-color)",
										}}
									>
										{t("footer.contact")}
									</span>
								</span>
							</div>
						)}
					</span>
				</div>
				{isTabletOrMobile && <SocialLinks />}
			</footer>
		</Main>
	);
};

const Main = styled.footer`
	footer {
		background-color: transparent;
		display: flex;
		justify-content: space-between;
		z-index: 10;
		position: absolute;
		width: 100%;
		height: 75px;
		padding-bottom: 5px;
	}

	span {
		font-size: 1rem;
		font-weight: bold;
	}

	.footer-text {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: white;
		margin-left: 16px;
		user-select: none;
	}

	@media (max-width: 455px) {
		.footer-text {
			display: none;
			z-index: 10;
		}
	}
`;

export default Footer;
