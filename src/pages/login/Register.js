import React from "react";
import styled from "styled-components";
//import { darkPrimaryColor, lightColor, textFont } from "../GlobalStyles";
import { MainButton } from "../../components/MainButton";
import './Register.css'

function Register() {
	return (
		<div>
			<form id="form-registro">
				<div>
					<div className="Center">
						<span className="StyleTitle">Registro</span>
					</div><br/><br/>

					<div>
						<div className="DivLine">
							<span className="StyleText">Ingresa tu nombre:</span><br/>
							<input className="InputText" id="nombre" name="nombre" type="text" placeholder="Nombre" /> 
						</div>
						<div className="DivLine">
							<span className="StyleText">Ingresa tu apellido:</span><br/>
							<input className="InputText" id="apellido" name="apellido" type="text" placeholder="Apellido" />
						</div>
					</div><br/>

					<div>
						<span className="StyleText">Ingresa tu correo electrónico:</span><br/>
						<input className="InputTextLarge" id="correo" name="correo" type="text" placeholder="Correo electrónico" />
					</div><br/>
					
					<div>
						<span className="StyleText">Ingresa tu contraseña:</span><br/>
						<input className="InputTextLarge" id="password" name="password" type="text" placeholder="Contraseña" />
					</div><br/>

					<div>
						<span className="StyleText">Verificar tu contraseña:</span><br/>
						<input className="InputTextLarge" id="vPassword" name="vPassword" type="text" placeholder="Verificar Contraseña" />
					</div><br/>

					<div className="Center">
						<MainButton text='Registrarse' />
					</div>
				</div>
			</form>
		</div>
	);
}

export { Register };