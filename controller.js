const ViewTodo = require('./view')
const TodoModel = require('./model')
class TodoController {
    static createTodo (todo) {
        TodoModel.saveTodo(todo, function (err, data) {
            if (err) {
                ViewTodo.showResult(`error nya ini ${err}`)
            }
            else {
                TodoModel.delete(todo, (err, data) => {
                    
                })
            }
        })
    }
    
    static deleteTodo (todo) {
        ViewTodo.showResult(todo)
    }
}

module.exports = TodoController