import React from "react"
import ReactDOM from "react-dom"
import Adapter from 'enzyme-adapter-react-16';
import TodoList from "./TodoList"
import { mount, configure } from "enzyme"

configure({adapter: new Adapter()})

describe('Component: TodoList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TodoList />)
  })

  it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<TodoList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it("renders form on page", () => {
      const form = wrapper.find('form.todo-form')
      expect(form.name()).toBe('form')
  })

  it("renders list on page", () => {
      const list = wrapper.find('ul.todo-list')
      expect(list.name()).toBe('ul')
  })

})