import './style.css';
import { Project } from './modules/project.js';
import { Todo } from './modules/todo.js';

function loadProjects() {
    const projectsContainer = document.querySelector('#project-container');
    const firstProject = new Project("First Project");

    const projectDiv = document.createElement('div');
    projectDiv.textContent = firstProject.name;
    projectDiv.classList.add('project');

    const todo = new Todo("Title", "Description", "06/06/2023", "High", "No");

    firstProject.addTodo(todo);

    projectsContainer.appendChild(projectDiv);

    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        project.addEventListener("click", () => {
            projects.forEach((project) => {
                project.style.backgroundColor = "rgb(231, 224, 224)";
            });
            project.style.backgroundColor = "rgb(75, 143, 232)";
        });
    });

    return projectsContainer;
}

document.body.appendChild(loadProjects());

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
        const newProject = new Project(`${projectName.value}`);
        const projectsContainer = document.querySelector('#project-container');
        const newProjectDiv = document.createElement('div');
        newProjectDiv.textContent = newProject.name;
        newProjectDiv.classList.add('project');
        projectsContainer.appendChild(newProjectDiv);

        document.querySelectorAll('.project').forEach((project) => {
            project.style.display = "block";
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