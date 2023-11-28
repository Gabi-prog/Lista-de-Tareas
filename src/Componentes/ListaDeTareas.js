import React, { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

function ListaDeTareas() {
  // Estado para almacenar las tareas
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    // Cargar tareas desde localStorage al cargar el componente
    const storedTareas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(storedTareas);
  }, []); // La dependencia vacía asegura que este efecto se ejecute solo una vez al montar el componente

  // Función para guardar tareas en localStorage
  const guardarTareasEnLocalStorage = (tareas) => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  };

  // Función para agregar una nueva tarea
  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      guardarTareasEnLocalStorage(tareasActualizadas); // Guardar tareas actualizadas en localStorage
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
    guardarTareasEnLocalStorage(tareasActualizadas); // Guardar tareas actualizadas en localStorage
  };

  // Función para marcar/desmarcar una tarea como completada
  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    guardarTareasEnLocalStorage(tareasActualizadas); // Guardar tareas actualizadas en localStorage
  };

  return (
    <>
      {/* Componente para agregar nuevas tareas */}
      <TareaFormulario onSubmit={agregarTarea} />
      {/* Contenedor de la lista de tareas */}
      <div className="tareas-lista-contenedor">
        {/* Mapeo de las tareas para renderizar cada tarea */}
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
