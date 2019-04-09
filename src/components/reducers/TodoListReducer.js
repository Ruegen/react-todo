import TodoApi from '../todoApi'
import createTodo from '../todo'

const todoApi = new TodoApi()

const reducer =  (state, action) => {
  switch (action.type) {
    case 'GET_TODOS':
    const todos = todoApi.getTodos()
    return {
      ...state,
      todos
    }
    case 'ADD_TODO':
    try {
      const {title} = action.payload
      const todo = createTodo(title)
      todoApi.addTodo(todo)
      return {
        ...state,
        todos: [todo, ...state.todos]
      }
    } catch(err) {
      console.log(err) 
      return {
        ...state
      }
    }
    case 'DELETE_TODO':
    const {id} = action.payload
    try {
      todoApi.deleteTodoById(id)
      return {...state,
        todos: state.todos.filter(t => t.id !== id)
      }
    } catch(err) {
      return state
    }
    case 'UPDATE_TODO':
    try {
      const {id, title} = action.payload
      todoApi.updateTodo(id, title)
      const todo = state.todos.find(t => t.id === id)
      todo.title = title
      return {
        ...state,
        todos: state.todos.map(t => t.id === id ? todo : t)
      } 
    } catch (err) {
      return state
    }
    case 'TOGGLE_TODO_COMPLETED':
    try {
      const {id} = action.payload
      todoApi.toggleTodoComplete(id)
      const todo = state.todos.find(t => t.id === id)
      todo.completed = !todo.completed
      return {
        ...state,
        todos: state.todos.map(t => t.id === id ? todo : t)
      } 
    } catch (err) {
      return state
    }
    default: 
    return state
  }
}

export default reducer