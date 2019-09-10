const INPUT = process.argv.slice(2)
const TodoController = require('./controller')
switch (INPUT[0]) {
    case "add": 
        TodoController.createTodo(INPUT[1])
        break;
    case 'list':
        console.log("list")
        break;
    case "delete":
        TodoController.deleteTodo(INPUT[1])
        break;
    case "help":
        console.log("help")
        break;
    default: 

}