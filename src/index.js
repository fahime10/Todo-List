import './style.css';
import { Project } from './modules/project.js';
import { Todo } from './modules/todo.js';

let projects = [];

function loadProjects() {
    const projectsContainer = document.querySelector('#project-container');
    const firstProject = new Project(1, "First Project");
    const secondProject = new Project(2, "Second Project");

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.append(firstProject.name);
    projectDiv.id = firstProject.id;

    const projectDiv2 = document.createElement('div');
    projectDiv2.classList.add('project');
    projectDiv2.append(secondProject.name);
    projectDiv2.id = secondProject.id;

    projects.push(firstProject, secondProject);

    const todo = new Todo("First todo", "Description normal", "06/06/2023", "High", "No");
    const todo2 = new Todo("Second todo", "Description new", "06/06/2023", "High", "No");
    const todo3 = new Todo("Third todo", "Description normal", "06/06/2023", "High", "No");
    const todo4 = new Todo("Fourth todo", "Description new", "06/06/2023", "High", "No");
    const todo5 = new Todo("Fifth todo", "Description normal", "06/06/2023", "High", "No");
    const todo6 = new Todo("Sixth todo", "Description new", "06/06/2023", "High", "No");

    firstProject.addTodo(todo);
    firstProject.addTodo(todo2);
    secondProject.addTodo(todo3);
    secondProject.addTodo(todo4);
    secondProject.addTodo(todo5);
    secondProject.addTodo(todo6);

    projectsContainer.append(projectDiv);
    projectsContainer.appendChild(projectDiv2);

    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach((project) => {
        project.addEventListener("click", () => {
            allProjects.forEach((project) => {
                project.style.backgroundColor = "rgb(231, 224, 224)";
            });
            project.style.backgroundColor = "rgb(75, 143, 232)";
            loadTodos(projects[project.id - 1]);
        });
    });
}
loadProjects();

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
        const newProject = new Project(3, `${projectName.value}`);
        const projectsContainer = document.querySelector('#project-container');
        const newProjectDiv = document.createElement('div');
        newProjectDiv.textContent = newProject.name;
        newProjectDiv.classList.add('project');
        newProjectDiv.id = newProject.id;
        projectsContainer.appendChild(newProjectDiv);

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
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        if (project.style.backgroundColor == "rgb(75, 143, 232)") {

        }
    });
}