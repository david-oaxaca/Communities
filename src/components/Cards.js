import React from "react";
import styled from "styled-components";
import urlImg from "../assets/img/img_index.jpg";
import { StyledButton } from "./MainButton";
import { BsFillPeopleFill } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { darkPrimaryColor, titlesFont, cardsColor } from "./GlobalStyles";

const Button = styled(StyledButton)`
	width: 80px;
	height: 25px;
	font-size: 1.2rem;
`;

const Container = styled.article`
	width: 300px;
	height: 300px;
	display: flex;
	flex-direction: column;
	background-color: ${cardsColor};
	border-radius: 15px;
	align-items: center;
	padding: 20px;
	margin-bottom: 5px;
	box-shadow: 10px 10px 5px -4px rgba(0, 0, 0, 0.38);
	img {
		width: 260px;
		height: 200px;
		border-radius: 10px;
	}
	.info {
		margin-top: 5px;
		margin-bottom: 5px;
		display: flex;
		align-items: center;
		p {
			margin-left: 10px;
			font-size: 1.1rem;
		}
		div {
			display: flex;
			align-items: center;
			h3 {
				font-family: ${titlesFont};
				font-size: 1.4rem;
				margin-left: 5px;
			}
			.icon {
				font-size: 1.4rem;
			}
		}
	}
	div {
		display: flex;
		.desc {
			font-size: 1.2rem;
		}
		.admin {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			.bell {
				font-size: 2.2rem;
				margin-top: 10px;
				color: ${darkPrimaryColor};
			}
		}
	}
`;
function Cards(props) {
	return (
		<Container>
			<img alt='card image' src={urlImg}></img>
			<div className='info'>
				<div>
					<BsFillPeopleFill className='icon' />
					<h3>{props.name}</h3>
				</div>
				<p>{props.place}</p>
			</div>
			<div>
				<p className='desc'>{props.desc}</p>
				<div className='admin'>
					{!!props.isAdmin && <Button>Administrar</Button>}
					{!props.isAdmin && !props.belongsTo && <Button>Unirse</Button>}

					{!!props.belongsTo && <VscBellDot className='bell' />}
				</div>
			</div>
		</Container>
	);
}

export { Cards };
