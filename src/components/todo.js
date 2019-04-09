import * as shortid from 'shortid'

const createTodo = function(title) {
    return {
        id: shortid.generate(),
        title,
        completed: false
    }
}
export default createTodo
