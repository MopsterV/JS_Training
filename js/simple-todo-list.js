const addTaskBtn = document.getElementById('add-tsk-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todo__items');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItemElems = []

function Task(description) {
    this.description = description;
    this.completed = false;
}

createTemplate = (task, index) => {
    return `
    <label for="${index}"><div class="todo__li ${task.completed ? 'checked' : ''}" >
        <input id="${index}"  onclick="completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}>
        <div class="description">${task.description}</div>
        <button onclick="deleteTask(${index})" class="btn-delete"></button>
    </div></label>
    `
}


const fillHtmlList = () => {
    todosWrapper.innerHTML = "";
    if(tasks.length > 0) {
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        });
        todoItemElems = document.querySelectorAll('.todo__li');
    }
};

fillHtmlList();

const updateLocal = () => {
    localStorage.setItem('tasks',JSON.stringify(tasks));
};

const completeTask = index => {
    console.log(index);
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed) {
        todoItemElems[index].classList.add('checked');  
    } else {
        todoItemElems[index].classList.remove('checked');
    }
    updateLocal();
    fillHtmlList();
};

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(deskTaskInput.value));
    updateLocal();
    fillHtmlList();
    deskTaskInput.value = '';
});

const deleteTask = index => {
        tasks.splice(index, 1);
        updateLocal();
        fillHtmlList();
};
