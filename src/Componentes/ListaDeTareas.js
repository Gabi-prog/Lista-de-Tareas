import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../Componentes/hojas-de-estilo/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas (){
		const [tareas, setTareas] = useState( [] );
		const agregarTarea = tarea => {			
			if(tarea.texto.trim()){   //verifica que la tarea no este vacía
				tarea.texto = tarea.texto.trim(); //quita espacios innecesarios
				const tareasActualizadas = [tarea,...tareas];
				setTareas(tareasActualizadas);				
			}
		}
    return(
			<>
				<TareaFormulario onSubmit= { agregarTarea } />
				<div className="tareas-lista-contenedor">
					{
						tareas.map( (tarea) =>
							<Tarea 
							texto={tarea.texto}
							completada={tarea.completada}
							/>
						)
					}
				</div>
			</>
    );
}
export default ListaDeTareas;