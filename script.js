document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Función para agregar una nueva tarea
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        // Crear elementos
        const li = document.createElement('li');
        li.classList.add('task-item');

        const span = document.createElement('span');
        span.classList.add('task-text');
        span.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Eliminar';

        // Añadir eventos
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Añadir al DOM
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Limpiar input
        newTaskInput.value = '';
    }

    // Eventos
    addTaskButton.addEventListener('click', addTask);

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
