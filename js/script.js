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

function addToChecklist(name, time, person, supplies, location, due) {
    let inputForm = document.querySelector("#inputform");
    let newForm = document.createElement("form");
    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = "Reassign Person"
    let p = document.createElement("p");
    document.getElementById("inputform").append(p);
    inputForm.after(newForm);
    newForm.append(label);
    label.after(checkbox);
    checkbox.after(ul);
    ul.after(button);
    li1.innerText = time + " minutes";
    li2.innerText = person;
    li3.innerText = supplies;
    li4.innerText = location;
    li5.innerText = "Due By: " + due;
    ul.append(li1, li2, li3, li4, li5);
    newForm.setAttribute("id", name);
    label.innerText = name;
    label.setAttribute("for", name + due);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", name + due);
    button.setAttribute("id", due + name);
    button.setAttribute("type", "button");
    console.log(checkbox.value)
    // document.getElementById("#" + due + name).onclick = function(){
    //     li2.innerText = window.prompt("Please input a new person");
    //     }
}

function clearCompletedForm(){
    let checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedBoxes.forEach(element => { 
        document.querySelector("#" + element.id).parentNode.remove();
    });

//    document.querySelector(checkedBoxes).remove();
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
    addToChecklist(inputtedName, inputtedTime, inputtedPerson, inputtedSupplies, inputtedLocation, inputtedDueDate);
}

window.addEventListener("load", function(event){
    event.preventDefault()
    document.querySelector("form#inputform").addEventListener("submit", handleFormSubmission)
    const clearButton = document.querySelector("#clear-complete");
    clearButton.addEventListener("click", clearCompletedForm);
})
