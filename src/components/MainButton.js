import React from "react";
import styled from "styled-components";
import {
	darkPrimaryColor,
	lightColor,
	textFont,
	primaryColor,
} from "./GlobalStyles";
const StyledButton = styled.button`
	width: 100px;
	height: 35px;
	background-color: ${darkPrimaryColor};
	border-radius: 10px;
	color: ${lightColor};
	font-size: 1.4rem;
	font-family: ${textFont};
	border: none;
	&:hover {
		background-color: ${primaryColor};
		cursor: pointer;
	}
`;

function MainButton({ size, text }) {
	return <StyledButton>{text}</StyledButton>;
}

export { MainButton, StyledButton };
