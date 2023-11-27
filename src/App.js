
import './App.css';
import Tarea from './Componentes/Tarea';
import ListaDeTareas from './Componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>       
        <h1 id='titulo-principal'>Curso React-UTN</h1>
      </div>
      <div  className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
        
      </div>
      
    </div>
  );
}

export default App;
