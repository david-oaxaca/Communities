import React from "react";
import styled from "styled-components";
//import { darkPrimaryColor, lightColor, textFont } from "../GlobalStyles";
import { MainButton } from "../../components/MainButton";
import './Login.css'

function Login() {
	return (
		<div>
			<form id="form-registro">
				<div>
					<div className="Center">
						<span className="StyleTitle">Login</span>
					</div><br/><br/>

					<div>
						<span className="StyleText">Ingresa tu correo electrónico:</span><br/>
						<input className="InputTextLarge" id="correo" name="correo" type="text" placeholder="Correo electrónico" />
					</div><br/>
					
					<div>
						<span className="StyleText">Ingresa tu contraseña:</span><br/>
						<input className="InputTextLarge" id="password" name="password" type="text" placeholder="Contraseña" />
					</div><br/>

					<div className="Center">
                    <span className="StyleText Underline">¿Olvidaste tu contraseña?</span><br/><br/>
						<MainButton text='Iniciar sesión' />
					</div>
				</div>
			</form>
		</div>
	);
}

export { Login };