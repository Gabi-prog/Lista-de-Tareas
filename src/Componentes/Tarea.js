
import React from "react";
import '../Componentes/hojas-de-estilo/Tarea.css';
import { AiOutlineDelete  } from "react-icons/ai";

function Tarea ({ texto }){

    return(
      <div className="tarea-contenedor">
				<div className="tarea-texto">
					{texto}
				</div>
				<div className="tarea-contenedor-iconos">
				<AiOutlineDelete className="tarea-icono" />
				</div>

			</div>
    );
}
export default Tarea;