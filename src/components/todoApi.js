class TodoApi {
    todos
    
    constructor() {
        this.todos = []
    }

    getTodos() {
        try {
            const todos = JSON.parse(localStorage.getItem('todos'))
            if(!todos) {
              return this.todos
            }
            this.todos = todos
            return this.todos
          } catch(err) {
            console.log('have no local storage')
            return this.todos
          }
    }

    addTodo(todo) {
        if(!todo.id) {
            return this
        }
        this.todos = [todo, ...this.todos]
        this.updateLocalStorage(this.todos)
        return this
    }

    deleteTodoById(id) {
      this.todos = this.todos.filter(t => t.id !== id)
      this.updateLocalStorage(this.todos)
      return this
    }

    updateTodo(id, title) {
      const todo = this.todos.find(t => t.id === id)
      if(todo) {
        todo.title = title
        this.todos = this.todos.map(t => (t.id === id ? todo : t))
        this.updateLocalStorage(this.todos)
      }
      return this
    }

    toggleTodoComplete(id) {
      const todo = this.todos.find(t => t.id === id)
      if(todo) {
        todo.completed = !todo.completed
        this.todos = this.todos.map(t => (t.id === id ? todo : t))
        this.updateLocalStorage(this.todos)
      }
      return this
    }

    updateLocalStorage(todos) {
        setTimeout(() => {
            localStorage.setItem('todos', JSON.stringify(todos))
          }, 300)
    }
}


export default TodoApi