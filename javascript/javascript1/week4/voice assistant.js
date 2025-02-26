//Voice Assistant
let userName = "";
let todos = [];

function getReply(command) {
    // (1) Save user name
    if (command.startsWith("Hello my name is")) {
        userName = command.replace("Hello my name is", "").trim();
        return `Nice to meet you, ${userName}`;
    }

    // (2) Respond with user name
    else if (command === "What is my name?") {
        return userName ? `Your name is ${userName}` : "I don't know your name yet!";
    }

    // (3) Add an item to the todo list
    else if (command.startsWith("Add")) {
        let todoItem = command.replace("Add", "").replace("to my todo", "").trim();
        todos.push(todoItem);
        return `${todoItem} added to your todo.`;
    }

    // (4) Show all todos
    else if (command === "What is on my todo?") {
        return todos.length > 0 ? `You have ${todos.length} todos: ${todos.join(", ")}` : "Your todo list is empty.";
    }

    // (5) Remove item from the todo
    else if (command.startsWith("Remove")) {
        let todoItem = command.replace("Remove", "").replace("from my todo", "").trim();
        let index = todos.indexOf(todoItem);
        if (index !== -1) {
            todos.splice(index, 1);
            return `Removed ${todoItem} from your todo.`;
        } else {
            return `${todoItem} is not in your todo list`;
        }
    }

    // (6) Get today's date
    else if (command === "What day is it today?") {
        let today = new Date();
        let day = today.getDate();
        let month = today.toLocaleString("en-US", { month: "long" });
        let year = today.getFullYear();
        return `${day}. of ${month} ${year}`;
    }

    // (7) Math
    else if (command.startsWith("What is")) {
        let expression = command.replace("What is", "").trim();
        if (/^[0-9+\-*/().\s]+$/.test(expression)) {
            try {
                let result = eval(expression);
                return `${expression} = ${result}`;
            } catch (error) {
                return "Sorry, I can't calculate that.";
            }
        } else {
            return "Sorry, I can't calculate that.";
        }
    }

    // (8) Set a timer 
    else if (command.startsWith("Set a timer for")) {
        let timeMatch = command.match(/\d+/);
        if (timeMatch) {
            let minutes = parseInt(timeMatch[0]);
            setTimeout(() => {
                console.log("Timer done!");
            }, minutes * 60000);
            return `Timer set for ${minutes} minutes.`;
        }
    }

    return "Sorry, I don't understand that command.";
}

// Example commands
console.log(getReply("Hello my name is Amin"));
console.log(getReply("What is my name?"));          
console.log(getReply("Add fishing to my todo"));   
console.log(getReply("What is on my todo?"));      
console.log(getReply("Remove fishing from my todo")); 
console.log(getReply("What is on my todo?"));         
console.log(getReply("What day is it today?")); 
console.log(getReply("What is 5 + 3"));       
console.log(getReply("What is 4 * 7"));     
console.log(getReply("Set a timer for 1 minutes")); 