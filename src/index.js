import './style.css';
import { Project } from './modules/project.js';
import { Todo } from './modules/todo.js';

let projects = [];
let todos = [];
let project_id = 0;
let project_name = "";
let todo_counter = 0;
let todo_id = 0;

function loadProjects() {
    const projectsContainer = document.querySelector('#project-container');

    const items = {...localStorage};

    for (let i = 0; i <= localStorage.length + 1; i++) {
        if (JSON.parse(items[i] !== undefined)) {
            let item = JSON.parse(items[i]);
            if (!isNaN(item.id)) {
                if (item !== null) {
                    projects.push(item);
                    const projectDiv = document.createElement('div');
                    projectDiv.classList.add('project');
                    projectDiv.innerHTML = item.project_name;
                    projectDiv.id = item.id;
                    projectsContainer.appendChild(projectDiv);
                }
            }
        }
    }

    applyEventListener();
}
loadProjects();

function applyEventListener() {
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach((project) => {
        project.addEventListener("click", () => {
            allProjects.forEach((project) => {
                project.style.backgroundColor = "rgb(231, 224, 224)";
            });
            project.style.backgroundColor = "rgb(75, 143, 232)";
            project_id = project.id;
            project_name = project.innerHTML;
            loadTodos(JSON.parse(localStorage.getItem(project.id)).todos, project.id);
        });
    });
}

function applyTodoEventListener() {
    const allTodos = document.querySelectorAll('.todo');
    allTodos.forEach((todo) => {
        todo.addEventListener("click", () => {
            allTodos.forEach((todo) => {
                todo.style.backgroundColor = "#FFFFFF";
            });
            todo.style.backgroundColor = "rgb(75, 143, 232)";
        });
    });
}

function loadTodos(allTodos, project_id) {
    const allTodosContainer = document.querySelector('#all-todos');
    allTodosContainer.innerHTML = "";

    todos = [];
    
    allTodos.forEach((todo) => {
        todo_counter++;
        todos.push(todo);
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `${todo.title} - ${todo.description}, due by ${todo.date}, priority: ${todo.priority}`;
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        todoDiv.append(checkbox);
        todoDiv.classList.add('todo');
        todoDiv.id = project_id;
        todoDiv.title = todo_counter;

        allTodosContainer.appendChild(todoDiv);
    });

    applyTodoEventListener();
}

function displayAddForm() {
    document.querySelectorAll('.project').forEach((project) => {
        project.style.display = "none";
    });
    document.getElementById('form-project').style.display = "block";
}
document.querySelector('#add-project').addEventListener('click', displayAddForm);

function submitProject(event) {
    event.preventDefault();
    const projectName = document.querySelector('#project-name');
    
    if (validateProjectName(projectName.value)) {
        const newProject = new Project(localStorage.length + 1, `${projectName.value}`, []);
        const projectsContainer = document.querySelector('#project-container');
        const newProjectDiv = document.createElement('div');
        newProjectDiv.textContent = newProject.name;
        newProjectDiv.classList.add('project');
        newProjectDiv.id = newProject.id;
        projectsContainer.appendChild(newProjectDiv);
        
        applyEventListener();

        const data = {
            id: newProject.id,
            project_name: newProject.name,
            todos: newProject.todos
        };

        localStorage.setItem(`${newProject.id}`, JSON.stringify(data));
        projects.push(`${newProject.name}`);

        document.querySelectorAll('.project').forEach((project) => {
            project.style.display = "flex";
        });

        document.querySelector('#form-project').style.display = "none";
        projectName.value = "";
    }
}
document.querySelector('#submit-project').addEventListener('click', submitProject);

function validateProjectName(projectName) {
    if (projectName.length > 0) {
        return true;
    } else {
        return false;
    }
}

function cancelProject(event) {
    event.preventDefault();
    document.querySelector('#form-project').style.display = "none";
    document.querySelectorAll('.project').forEach((project) => {
        project.style.display = "block";
    });
}
document.querySelector('#cancel-project').addEventListener('click', cancelProject);
//////////////////////////////////////////////////////////////////////////////////////////

function displayEditProject() {
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach((project) => {
        if (project.style.backgroundColor == "rgb(75, 143, 232)") {
            document.getElementById('edit-form-project').style.display = "block";
            document.querySelectorAll('.project').forEach((project) => {
                project.style.display = "none";
            });
            document.querySelector('#edit-project-name').value = project.innerHTML;
        }
    });
}
document.querySelector('#edit-project').addEventListener('click', displayEditProject);

function editSelectedProject() {
    let value = document.querySelector('#edit-project-name').value;

    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach((project) => {
        if (project.style.backgroundColor == "rgb(75, 143, 232)") {
            const data = {
                id: project.id,
                project_name: value,
                todos: localStorage.getItem(project.id).todos
            };
        
            localStorage.setItem(project.id, JSON.stringify(data));
            projects = [];
            loadProjects();
            document.querySelector('#edit-form-project').style.display = "none";
        }
    });
}
document.querySelector('#submit-edit-project').addEventListener('click', editSelectedProject);

function cancelEditProject(event) {
    event.preventDefault();
    document.querySelector('#edit-form-project').style.display = "none";
    document.querySelectorAll('.project').forEach((project) => {
        project.style.display = "block";
    });
}
document.querySelector('#cancel-edit-project').addEventListener('click', cancelEditProject);
////////////////////////////////////////////////////////////////////////////

function displayDeleteProject() {
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach((project) => {
        if (project.style.backgroundColor == "rgb(75, 143, 232)") {
            document.getElementById('remove-form-project').style.display = "block";
            document.querySelectorAll('.project').forEach((project) => {
                project.style.display = "none";
            });
            document.querySelector('#delete-project-name').value = project.innerHTML;
        }
    });
}
document.querySelector('#remove-project').addEventListener('click', displayDeleteProject);

function deleteSelectedProject() {
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach((project) => {
        if (project.style.backgroundColor == "rgb(75, 143, 232)") {
            localStorage.removeItem(project.id);

            projects = [];
            loadProjects();
            document.querySelector('#remove-form-project').style.display = "none";
        }
    });
}
document.querySelector('#submit-delete-project').addEventListener('click', deleteSelectedProject);

function cancelDeleteProject(event) {
    event.preventDefault();
    document.querySelector('#remove-form-project').style.display = "none";
    document.querySelectorAll('.project').forEach((project) => {
        project.style.display = "block";
    });
}
document.querySelector('#cancel-delete-project').addEventListener('click', cancelDeleteProject);
////////////////////////////////////////////////////////////////////////////

function displayAddTodo() {
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach((project) => {
        if (project.style.backgroundColor == "rgb(75, 143, 232)") {
            document.querySelector('#form-todo').style.display = "grid";
        }
    });

    const allTodos = document.querySelectorAll('.todo');
    allTodos.forEach((todo) => {
        todo.style.display = "none";
    });
}
document.querySelector('#add-todo').addEventListener('click', displayAddTodo);

function addTodo() {
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let date = document.querySelector('#date').value;
    let priority = document.querySelector('#priority').value;
    let project_id;
    let name;

    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach((project) => {
        if (project.style.backgroundColor == "rgb(75, 143, 232)") {
            project_id = project.id;
            name = project.innerHTML;
        }
    });

    if (validateTodo(title, description, date, priority)) {
        let newTodo = new Todo(project_id, title, description, date, priority, false);
        const todosContainer = document.querySelector('#todos-container');
        const newTodoDiv = document.createElement('div');
        newTodoDiv.classList.add('todo');
        newTodoDiv.id = project_id;
        todosContainer.appendChild(newTodoDiv);

        todos.push(newTodo);

        applyTodoEventListener();

        const data = {
            id: project_id,
            project_name: name,
            todos: todos
        };

        localStorage.setItem(`${project_id}`, JSON.stringify(data));

        document.querySelectorAll('.todo').forEach((todo) => {
            todo.style.display = "flex";
        });

        document.querySelector('#form-todo').style.display = "none";


    }
}
document.querySelector('#submit-todo').addEventListener('click', addTodo)

function validateTodo(title, description, date, priority) {
    if (title.length > 0 && description.length > 0 && date.length > 0 && priority.length > 0) {
        return true;
    } else {
        return false;
    }
}

function cancelAddTodo() {
    document.querySelector('#form-todo').style.display = "none";

    const allTodos = document.querySelectorAll('.todo');
    allTodos.forEach((todo) => {
        todo.style.display = "flex";
    });
}
document.querySelector('#cancel-todo').addEventListener('click', cancelAddTodo);
///////////////////////////////////////////////////////////////////////////////////

function displayEditTodo() {
    const allTodos = document.querySelectorAll('.todo');
    allTodos.forEach((todo) => {
        if (todo.style.backgroundColor == "rgb(75, 143, 232)") {
            document.querySelector('#edit-form-todo').style.display = "grid";
            document.querySelector('#all-todos').style.display = "none";
        }
    });
}
document.querySelector('#edit-todo').addEventListener('click', displayEditTodo);

function editTodo() {
    const allTodos = document.querySelectorAll('.todo');
    allTodos.forEach((todo) => {
        if (todo.style.backgroundColor == "rgb(75, 143, 232)") {
            
        }
    });
}
document.querySelector('#submit-edit-todo').addEventListener('click', editTodo);

function cancelEditTodo() {
    document.querySelector('#edit-form-todo').style.display = "none";
    allTodos = document.querySelector('#all-todos').style.display = "block";
}
document.querySelector('#cancel-edit-todo').addEventListener('click', cancelEditTodo);
/////////////////////////////////////////////////////////////////////////////////////

function displayDeleteTodo() {
    const allTodos = document.querySelectorAll('.todo');
    allTodos.forEach((todo) => {
        if (todo.style.backgroundColor == "rgb(75, 143, 232)") {
            todo.style.backgroundColor = "#FFFFFF";
            document.querySelector('#remove-form-todo').style.display = "grid";
            document.querySelector('#all-todos').style.display = "none";
            document.querySelector('#project-id').appendChild(todo);
            todo_id = todo.title;
        }
    });
}
document.querySelector('#remove-todo').addEventListener('click', displayDeleteTodo);

function deleteTodo() {
    todos.splice(todo_id - 1, todo_id);

    const data = {
        id: project_id,
        project_name: project_name,
        todos: todos
    }

    localStorage.setItem(`${project_id}`, JSON.stringify(data));

    document.querySelector('#remove-form-todo').style.display = "none";
    document.querySelector('#all-todos').style.display = "block";
}
document.querySelector('#yes-todo').addEventListener('click', deleteTodo);

function cancelDeleteTodo() {
    document.querySelector('#remove-form-todo').style.display = "none";
    document.querySelector('#all-todos').style.display = "block";
    todo_counter = 0;
}
document.querySelector('#no-todo').addEventListener('click', cancelDeleteTodo);