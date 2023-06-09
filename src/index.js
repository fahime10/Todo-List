import './style.css';
import { Project } from './modules/project.js';
import { Todo } from './modules/todo.js';

let projects = [];

function loadProjects() {
    const projectsContainer = document.querySelector('#project-container');

    // const todo = new Todo("First todo", "Description normal", "06/06/2023", "High", "No");
    // const todo2 = new Todo("Second todo", "Description new", "06/06/2023", "High", "No");
    // const todo3 = new Todo("Third todo", "Description normal", "06/06/2023", "High", "No");
    // const todo4 = new Todo("Fourth todo", "Description new", "06/06/2023", "High", "No");
    // const todo5 = new Todo("Fifth todo", "Description normal", "06/06/2023", "High", "No");
    // const todo6 = new Todo("Sixth todo", "Description new", "06/06/2023", "High", "No");

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
            // loadTodos(projects[project.id - 1]);
        });
    });
}

function loadTodos(projectSelected) {
    const todosContainer = document.querySelector('#todos-container');
    todosContainer.innerHTML = "";

    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        if (project.style.backgroundColor == "rgb(75, 143, 232)") {
            const todos = projectSelected.viewTodos();
            todos.forEach((todo) => {
                const todoDiv = document.createElement('div');
                todoDiv.innerHTML = projectSelected.stringFormat(todo);
                todoDiv.classList.add('todo');

                todosContainer.appendChild(todoDiv);
            });
        }
    });
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
        const newProject = new Project(localStorage.length + 1, `${projectName.value}`);
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

function editSelectedProject() {
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
document.querySelector('#edit-project').addEventListener('click', editSelectedProject);

function applyEditProject() {
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
document.querySelector('#submit-edit-project').addEventListener('click', applyEditProject);

function cancelEditProject(event) {
    event.preventDefault();
    document.querySelector('#edit-form-project').style.display = "none";
    document.querySelectorAll('.project').forEach((project) => {
        project.style.display = "block";
    });
}
document.querySelector('#cancel-edit-project').addEventListener('click', cancelEditProject);