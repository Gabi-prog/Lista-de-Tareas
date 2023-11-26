
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Tarea from './Componentes/Tarea';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img  
        src={ freeCodeCampLogo }  
        className='logo' 
        />
      </div>
      <div  className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React'/>
        
      </div>
      
    </div>
  );
}

export default App;
