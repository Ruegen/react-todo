import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  render() {
    return (
      <main>
        <img src={logo} className="brand" alt="logo" />
        <h1 className="title">React Todo List</h1>
        <p className="github-link">
          <a href="https://github.com/Ruegen/react-todo">github repo</a>
        </p>
      </main>
    )
  }
}

export default App
