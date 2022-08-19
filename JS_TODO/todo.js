let input = prompt("What would you like to do?")
const todos = ['Bootcamp', 'DS', 'ALGO']
while (input !== 'quit' && input !== 'q') {
    input = prompt("what would you like to do?")
    if (input === 'list') {
        console.log("*****************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("*****************")
    } else if (input === 'new') {
        const newTodo = prompt('OK, what is the new todo?')
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === 'delete') {
        const idx = parseInt(prompt('OK, enter an index to delete'));
        if (!Number.isNaN(idx)) {
            const deleted = todos.splice(idx, 1);
            console.log(`OK, deleted ${deleted[0]}`);
        } else {
            console.log('Invalid Index')
        }

    }
}

console.log("OK QUIT THE APP!")