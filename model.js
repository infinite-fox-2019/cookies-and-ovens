class TodoModel {
    static saveTodo (todo, callback) {
        //proses async
        if (todo == "makan") {
            callback(null, "benar")
        }
        else {
            callback("salah")
        }

    }
}

module.exports = TodoModel