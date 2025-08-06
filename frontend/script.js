async function loadTasks() {
  const res = await fetch('http://localhost:5000/api/tasks');
  const tasks = await res.json();

  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const div = document.createElement('div');
    div.className = 'task';
    div.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Intern: ${task.internId?.name || 'N/A'} (${task.internId?._id || 'ID not found'})</p>
      <p class="status">Status: <select data-id="${task._id}" onchange="updateStatus(event)">
        <option ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
        <option ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
      </select></p>
    `;
    taskList.appendChild(div);
  });
}

async function updateStatus(event) {
  const id = event.target.dataset.id;
  const status = event.target.value;
  await fetch('http://localhost:5000/api/tasks/' + id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ status })
  });
  loadTasks();
}

document.getElementById('taskForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const internId = document.getElementById('internId').value;

  await fetch('http://localhost:5000/api/tasks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ title, description, internId })
  });

  e.target.reset();
  loadTasks();
});

loadTasks();
