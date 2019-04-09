import TodoApi from './todoApi'
import createTodo from './todo'

describe('class: TodoApi', () => {
    let api, todo;
    beforeEach(() => {
        api = new TodoApi()
        todo = createTodo('Buy Bread')
    })

    it('#getTodos should return todos', () => {
        const todos = api.getTodos()
        expect(todos.length).toBe(0)
    })

    it('#addTodo should add todo', () => {
        api.addTodo(todo)
        const todos = api.getTodos()
        expect(todos.length).toBe(1)
    })

    it('#deleteTodo should delete todo', () => {
        api.addTodo(todo)
        api.deleteTodoById(todo.id)
        const todos = api.getTodos()
        expect(todos.length).toBe(0)
    })

    it('#updateTodo should update title in todo', () => {
        api.addTodo(todo)
        api.updateTodo(todo.id, 'Buy Milk')
        const todos = api.getTodos()
        expect(todos.find(t => todo.id === t.id).title).toBe('Buy Milk')
    })

    it('#toggleTodoComplete should toggle complete of todo', () => {
        api.addTodo(todo)
        api.toggleTodoComplete(todo.id)
        const todos = api.getTodos()
        expect(todos.find(t => todo.id === t.id).completed).toBe(true)
    })

    it('#updateLocalStorage should store in local storage', (done) => {
        api.addTodo(todo)
        const todos = api.getTodos()
        setTimeout(() => {
            const _todos = JSON.parse(localStorage.getItem('todos'))
            expect(_todos[0].id).toBe(todos[0].id)
            done()
        }, 500)
    })
})