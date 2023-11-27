
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Tarea from './Componentes/Tarea';
import ListaDeTareas from './Componentes/ListaDeTareas';

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
        <ListaDeTareas />
        
      </div>
      
    </div>
  );
}

export default App;
