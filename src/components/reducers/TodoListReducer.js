import createTodo from '../todo'

const updateLocalStorage = (todos) => {
  setTimeout(() => {
    localStorage.setItem('todos:react', JSON.stringify(todos))
  }, 300)
} 

const reducer =  (state, action) => {
  switch (action.type) {
    case 'GET_TODOS': {
    try {
      const todos = JSON.parse(localStorage.getItem('todos:react'))
      if(todos) {
        return {
          ...state,
          todos
        }
      }
      return state
    } catch(err) {
      console.error(err)
      return state
    }
    }
    
    case 'ADD_TODO': {

      const {title} = action.payload
      const todo = createTodo(title)
      const todos = [todo, ...state.todos]
      updateLocalStorage(todos)
      return {
        ...state,
        todos
      }
    }
    
    case 'DELETE_TODO': {

      const {id} = action.payload
        const todos = state.todos.filter(t => t.id !== id)
        updateLocalStorage(todos)
        return {...state,
          todos
        }
    }
        
    case 'UPDATE_TODO': {
      const {id, title} = action.payload
      const todos = state.todos.map(t => {
        if(t.id === id) {
          t.title = title
          return t
        }
        return t
      })
      updateLocalStorage(todos)
      return {
        ...state,
        todos
      } 
    }
    case 'TOGGLE_TODO_COMPLETED': {
      const {id} = action.payload;
      const todos = state.todos.map(t => {
        if(t.id === id) {
          t.completed = !t.completed
          return t
        }
        return t
      })
      updateLocalStorage(todos)
      return {
        ...state,
        todos
      }
    }
    
    default: 
    return state
  }
}

export default reducer