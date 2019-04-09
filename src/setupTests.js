import Adapter from "enzyme-adapter-react-16"
import { configure } from "enzyme"

configure({ adapter: new Adapter() })

import "jest-enzyme"
console.log("setup tests")
