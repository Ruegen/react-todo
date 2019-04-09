import reducer from './TodoListReducer'
import createTodo from '../todo'

describe('Reducer: TodoList reducer', () => {

    let state, todo;
    beforeEach(() => {
        todo = createTodo('Buy Bread')
        state = {
            todos: []
        }
    })

    it('action: GET_TODOS', () => {
        const action = {
            type: 'GET_TODOS'
        }
        const {todos} = reducer(state, action)
        expect(todos.length).toBe(0)
    })

    it('action: ADD_TODO', () => {
        const action = {
            type: 'ADD_TODO',
            payload: {
                title: todo.title
            }
        }
        const {todos} = reducer(state, action)
        expect(todos.length).toBe(1)
    })

    it('action: DELETE_TODO', () => {
        state.todos.push(todo)
        expect(state.todos.length).toBe(1)

        const action = {
            type: 'DELETE_TODO',
            payload: {
                id: todo.id
            }
        }
        const {todos} = reducer(state, action)
        expect(todos.length).toBe(0)
    })

    it('action: UPDATE_TODO', () => {
        state.todos.push(todo)        
        const action = {
            type: 'UPDATE_TODO',
            payload: {
                id: todo.id,
                title: 'Buy Milk'
            }
        }
        const {todos} = reducer(state, action)
        expect(todos[0].title).toBe('Buy Milk')
    })

    it('action: TOGGLE_TODO_COMPLETED', () => {
        state.todos.push(todo) 
        const action = {
            type: 'TOGGLE_TODO_COMPLETED',
            payload: {
                id: todo.id
            }
        }
        const {todos} = reducer(state, action)
        expect(todos[0].completed).toBe(true)
    })


})