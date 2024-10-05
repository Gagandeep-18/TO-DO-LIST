function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;

    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    const todoList = document.getElementById('todo-list');
    
    // Create new list item
    const li = document.createElement('li');
    li.innerHTML = `
        ${todoText}
        <button class="remove-btn" onclick="removeTodo(this)">Remove</button>
    `;
    
    // Mark task as completed on click
    li.addEventListener('click', function () {
        this.classList.toggle('completed');
    });
    
    todoList.appendChild(li);
    todoInput.value = '';  // Clear the input
}

function removeTodo(button) {
    const li = button.parentElement;
    li.remove();
}
