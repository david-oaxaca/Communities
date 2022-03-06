import React from "react";
import styled from "styled-components";
import profileImg from "../assets/img/profile.jpg";
import { StyledButton } from "./MainButton";
import { BsSearch } from "react-icons/bs";
import { darkPrimaryColor } from "./GlobalStyles";
const Button = styled(StyledButton)`
	@media (max-width: 700px) {
		width: 90px;
	}
`;
const Bar = styled.div`
	margin-top: 20px;
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	place-content: center;
	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		margin-right: 20px;
	}
	.inputs {
		display: flex;
		align-items: center;
		div {
			position: relative;
		}
		input {
			width: 400px;
			height: 30px;
			margin-right: 20px;
			padding: 0 30px 0 20px;
			outline: none;
			border: 1px solid ${darkPrimaryColor};
			border-radius: 10px;
		}
		.icon {
			font-size: 2rem;
			position: absolute;
			right: 30px;
			top: 5px;
		}
	}

	@media (max-width: 700px) {
		img {
			width: 60px;
			height: 60px;
		}
		.inputs {
			input {
				width: 160px;
				height: 30px;
			}
		}
	}
`;

function SearchBar() {
	return (
		<Bar>
			<img alt='profile picture' src={profileImg}></img>
			<div className='inputs'>
				<div>
					<input type='text' />
					<BsSearch className='icon' />
				</div>
				<Button>Buscar</Button>
			</div>
		</Bar>
	);
}

export { SearchBar };
