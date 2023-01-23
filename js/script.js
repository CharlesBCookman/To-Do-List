//Business Logic

function List(){
    this.tasks = {};
}

List.prototype.addTask = function(task){
    this.tasks[task.taskName] = task;
}

List.prototype.assignPerson = function(person, task){
    task.taskPerson = person;
    return task.taskPerson;
}

List.prototype.checkIt = function(task) {
    if (task.taskComplete === true) {
        delete this.task;
        return "deleted";
    }
}

function Task(taskName, taskTime, taskPerson, taskSupplies, taskLocation, taskDate, taskComplete){
    this.taskName = taskName;
    this.taskTime = taskTime;
    this.taskPerson = taskPerson;
    this.taskSupplies = taskSupplies;
    this.taskLocation = taskLocation;
    this.taskDate = taskDate;
    this.taskComplete = taskComplete
}

//UI Logic

function addToChecklist() {
    document.createElement("form")
}

let list = new List();

function handleFormSubmission(event){
    event.preventDefault();
    const inputtedName = document.querySelector("#task-name").value;
    const inputtedTime = document.querySelector("#time").value;
    let inputtedPerson = document.querySelector("#assigned-to").value;
    const inputtedSupplies= document.querySelector("#supplies").value;
    const inputtedLocation = document.querySelector("#location").value;
    const inputtedDueDate = document.querySelector("#due").value;
    
    let newTask = new Task(inputtedName, inputtedTime, inputtedPerson, inputtedSupplies, inputtedLocation, inputtedDueDate, false);
    list.addTask(newTask);
    console.log(list.tasks);
    document.querySelector("#inputform").reset();
}

window.addEventListener("load", function(event){
    event.preventDefault()
    document.querySelector("form#inputform").addEventListener("submit", handleFormSubmission)
})
