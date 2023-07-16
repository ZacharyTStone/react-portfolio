import styled from "styled-components";


export const Title = styled.h1`
	margin-top: 0px;
	margin-bottom: 75px;
	text-decoration-line: underline;
	text-decoration-color: var(--secondary-color);
	text-decoration-thickness: 5px;
	text-underline-offset: 12px;
	font-size: 3rem;

	// margin and glassmorphism background

	margin: 0px 0px 75px 0px;
	background: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-radius: 10px;
	padding: 20px;
	text-wrap: balance;
`;
