import React from "react"
import ReactDOM from "react-dom"
import Adapter from 'enzyme-adapter-react-16';
import App from "./App"
import { mount, configure } from "enzyme"

configure({adapter: new Adapter()})

describe("Component: AppComponent", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />)
  })

  it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it(`should have expected title`, () => {
    const h1 = wrapper.find("h1.title")
    expect(h1.text()).toBe("React Todo List")
  })

  it('should have link to github', () => {
    const link = wrapper.find('p.github-link > a')
    expect(link.props().href).toBe('https://github.com/Ruegen/react-todo')
    expect(link.text()).toBe('github repo')
  })

  
})
