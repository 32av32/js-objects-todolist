const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],
    printAll: function() {
        for (let index in this.items) {
            this.print(index)
        }
    },
    add: function(text) {
        this.items.unshift({ text, completed: false })
    },
    remove: function(index) {
        this.items.splice(index, 1)
    },
    print: function(index) {
        console.log(`[${this.items[index].completed ? 'x' : ''}] ${this.items[index].text}`

        )
    },
    complete: function(index) {
        this.items[index].completed = true
    },
};