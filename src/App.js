import React from "react";
import ListaDeTareas from "./Componentes/ListaDeTareas";
import './App.css';

function App() {
  return (
    <div className="aplicacion-tareas">
      {/* Contenedor del logo */}
      <div className="logo-contenedor">
        <h1 id="titulo-principal">Curso React-UTN</h1>
      </div>
      {/* Contenedor principal de la lista de tareas */}
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        {/* Componente de lista de tareas */}
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
