import React from "react"
import ReactDOM from "react-dom"
import TodoList from "./TodoList"
import { mount } from "enzyme"

const updateInput = (wrapper, instance, val) => {
  const input = wrapper.find(instance)
  input.simulate("change", {
    currentTarget: { value: val }
  })
  wrapper.update()
  return input
}

describe("Component: TodoList", () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<TodoList />)
  })

  it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<TodoList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it("renders form on page", () => {
    const form = wrapper.find("form.todo-form")
    expect(form).toMatchSelector("form")
  })

  it("renders list on page", () => {
    const list = wrapper.find("ul.todo-list")
    expect(list).toMatchSelector("ul")
    expect(list).toExist()
  })

  it("renders form title input for new todo", () => {
    const input = wrapper.find('[name="title"]')
    expect(input.props().name).toBe("title")
    expect(input).toExist()
  })

  it("has an initial state of 0 todos", () => {
    const todo = wrapper.find("ul.todo-list > li")
    expect(todo).not.toExist()
  })

  // const input = updateInput(wrapper, "form > input", "Buy Bread")
  it("should display a todo", () => {
    const input = wrapper.find('[name="title"]')
    input.simulate("change", { target: { value: "Buy Bread" } })
    expect(input).toHaveValue("Buy Bread")
  })
})
