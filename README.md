Grupo H Lista de Tareas

1) Componente de Lista de Tareas (TaskList):
El componente ListaDeTareas muestra la lista de tareas.Recibe funciones para gestionar eventos relacionados con las tareas (agregarTarea, eliminarTarea, completarTarea).Cada tarea se representa mediante el componente Tarea.

2) Componente de Tarea (TaskItem):
El componente Tarea representa individualmente una tarea.Muestra el nombre de la tarea y un botón para completarla.Utiliza el estado local para gestionar la apariencia de la tare(tachado cuando está completada).

3) Componente de Formulario (TaskForm):
El componente TareaFormulario contiene un formulario para agregar nuevas tareas.
Utiliza el estado local para gestionar la entrada del usuario y envía la nueva tarea a la lista principal.

4) Estado con useState:
Se utiliza el hook useState en el componente principal (ListaDeTareas) para gestionar el estado de la lista de tareas.
Cada tarea es un objeto con propiedades como id, texto, y completada.

5) Efectos con useEffect:
Se utiliza useEffect en el componente principal (ListaDeTareas) para cargar las tareas desde localStorage al montar el componente y para guardar las tareas en localStorage cada vez que se actualizan.

6) Interacción con el Usuario - Eventos:
Eventos en el componente ListaDeTareas para interactuar con cada tarea (marcar como completada, eliminar, etc.).
Eventos en el componente TareaFormulario para gestionar la entrada del usuario y agregar nuevas tareas a la lista.