document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', () => {
        const todoText = newTodoInput.value.trim();
        if (todoText) {
            addTodoItem(todoText);
            newTodoInput.value = '';
        }
    });

    function addTodoItem(todoText) {
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                listItem.classList.add('completed');
                todoList.appendChild(listItem);
            } else {
                listItem.classList.remove('completed');
            }
        });

        const span = document.createElement('span');
        span.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
    }
});
