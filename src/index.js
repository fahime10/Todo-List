import './style.css';
import { Project } from './modules/project.js';
import { Todo } from './modules/todo.js';

function loadProjects() {
    const projectsContainer = document.querySelector('#project-container');
    const firstProject = new Project("First Project");
    const secondProject = new Project("Second Project");

    const projectDiv = document.createElement('div');
    projectDiv.textContent = firstProject.name;
    projectDiv.classList.add('project');

    const todo = new Todo("Title", "Description", "06/06/2023", "High", "No");

    firstProject.addTodo(todo);

    const projectDiv2 = document.createElement('div');
    projectDiv2.textContent = secondProject.name;
    projectDiv2.classList.add('project');

    projectsContainer.appendChild(projectDiv);
    projectsContainer.appendChild(projectDiv2);

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