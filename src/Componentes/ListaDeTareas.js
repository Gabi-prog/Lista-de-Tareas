import React from "react";
import TareaFormulario from "./TareaFormulario";
import '../Componentes/hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas (){
    return(
			<>
				<TareaFormulario />
				<div className="tareas-lista-contenedor">
					LISTA DE TAREAS
				</div>
			</>
    );
}
export default ListaDeTareas;