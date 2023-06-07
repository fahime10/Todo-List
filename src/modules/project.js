export class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    editTodo(todo) {

    }

    deleteTodo(todo) {

    }

    viewTodos() {
        return this.todos;
    }

    stringFormat(todo) {
        return todo.title + " - " + todo.description + ", to do by " + todo.date +
                ", priority: " + todo.priority + ", completed: " + todo.completed;
    }
}