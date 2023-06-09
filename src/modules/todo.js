export class Todo {
    constructor(project_id, title, description, date, priority, completed) {
        this.project_id = project_id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completed = completed;
    }

    stringFormat(todo) {
        return todo.title + " - " + todo.description + ", to do by " + todo.date +
                ", priority: " + todo.priority + ", completed: " + todo.completed;
    }
}