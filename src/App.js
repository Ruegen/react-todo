import React from "react"
import logo from "./logo.svg"
import "./App.css"
import TodoList from './components/TodoList'

const App = () => {
  return (
    <main>
      <img src={logo} className="brand" alt="brand" />
      <h1 className="title">React Todo List</h1>
      <TodoList/>
      <p className="github-link">
        <a href="https://github.com/Ruegen/react-todo">github repo</a>
      </p>
    </main>
  )
}

export default App
