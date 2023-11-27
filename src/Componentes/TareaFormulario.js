import React, { useState } from "react";
import './hojas-de-estilo/TareaFormulario.css';

function TareaFormulario (){

	const [input, setInput] = useState("");
	const manejarCambio = e => {
		setInput(e.target.value);
		console.log(e.target.value);

	}
	const manejarEnvio = e => {
		const tareaNueva = {
			id:" 4567",
			texto:"Hola",
		}
	}
    return (
      <form className="tarea-formulario">
				<input 
					className="tarea-input"
					type="text"
					placeholder="Ingresa una tarea"
					name="texto"
					onChange={ manejarCambio}
				/>
				<button className="tarea-boton">
					Agregar tarea					
				</button>
			</form>
    );
}
export default TareaFormulario;