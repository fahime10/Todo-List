export class Project {
    constructor(id, name, todos) {
        this.id = id;
        this.name = name;
        this.todos = todos;
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
}