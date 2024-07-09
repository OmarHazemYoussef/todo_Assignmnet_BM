function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const taskList = document.getElementById('task-list');
    taskList.appendChild(li);

    taskInput.value = '';
}
