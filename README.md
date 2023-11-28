# Lista de Tareas - Grupo H

## Integrantes

- Gabriela Peralta
- Mariana Salgueiro

Esta aplicación React, creada con create-react-app, se centra en la gestión de una lista de tareas.

 Aquí se presenta una descripción de los archivos principales y su funcionalidad:

### Archivos Principales

#### App.js

Este archivo define la estructura principal de la aplicación, que incluye un título, un logo y la lista de tareas. Utiliza el **componente ListaDeTareas** para mostrar las tareas.

#### ListaDeTareas.js

El componente **ListaDeTareas** es responsable de manejar el estado de las tareas, agregar nuevas tareas, eliminarlas y marcarlas como completadas. Además, utiliza el **componente TareaFormulario** para permitir a los usuarios agregar nuevas tareas y renderiza la lista de tareas existentes mediante el **componente Tarea**.

#### Tarea.js
El **componente Tarea** representa una tarea individual en la lista. Permite marcar la tarea como completada y eliminarla. También utiliza iconos para mejorar la experiencia del usuario.

#### TareaFormulario.js
Este componente contiene un formulario que permite a los usuarios agregar nuevas tareas. Captura la entrada del usuario y la utiliza para crear una nueva tarea, que luego se envía al ****componente ListaDeTareas**.

## Estructura de Carpetas

### Componentes: 

Contiene los componentes principales de la aplicación.
### Hojas-de-estilo:
 Contiene archivos de estilos para los componentes.

## Funcionalidad
La aplicación permite a los usuarios agregar nuevas tareas a la lista.
Cada tarea en la lista puede marcarse como completada o eliminarse.
Las tareas completadas se presentan visualmente de manera diferente en la interfaz de usuario.
La gestión del estado de las tareas se realiza principalmente en el componente ListaDeTareas, que utiliza el hook useState de React.
Este diseño modular facilita el mantenimiento y la comprensión del código, proporcionando una experiencia de usuario sencilla para la gestión de tareas.