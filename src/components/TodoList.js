import React, { useEffect, useReducer } from "react"
import reducer from './reducers/TodoListReducer'
import './TodoList.scss'

const TodoList = () => {
  const [{todos}, dispatch] = useReducer(reducer, {todos: []})

  useEffect(() => {
    dispatch({type: 'GET_TODOS'})
  },[])

  const addTodo = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    if(!title) {
      return
    }
    dispatch({type: 'ADD_TODO', payload: {title}})
  }

  const updateTodo = (e, id) => {
    const title = e.target.value
    dispatch({type: 'UPDATE_TODO', payload: {id, title}})
  }

  const deleteTodo = (id) => {
    dispatch({type: 'DELETE_TODO', payload: {id}})
  }

  const toggleTodoComplete = (id) => {
    dispatch({type: 'TOGGLE_TODO_COMPLETED', payload: {id}})
  }


  return (
    <>
      <form className="todo-form" onSubmit={addTodo}>
        <input type="text" name="title" />
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <button
              onClick={() => toggleTodoComplete(todo.id)}
              className="button-complete"
            >
              <span className={todo.completed ? "completed" : ""} />
            </button>
            <input
              autoComplete="off"
              className={todo.completed ? "completed" : ""}
              type="text"
              name="title"
              defaultValue={todo.title}
              onInput={e => updateTodo(e, todo.id)}
            />
            <button className="button-delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
export default TodoList
