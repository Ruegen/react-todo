import createTodo from './todo'

describe('todo object', () => {
    it('should have a generated id', () => {
        const todo = createTodo('Buy Bread')
        expect(todo.id).not.toBe('')
        expect(todo.id).toBeDefined()
    })
})