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

window.addEventListener("load", function(event){
    event.preventDefault()
})
