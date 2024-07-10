const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', addTodo);

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = todoText;
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
    todoInput.value = '';
  }
}

function deleteTodo(e) {
  const li = e.target.closest('li');
  todoList.removeChild(li);
}