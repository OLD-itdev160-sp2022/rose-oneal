//array that holds the tasks
var tasks = [];

//task status enum
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//task constructor function
function Task (id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

//creates a new task element and adds it to the DOM
function addTaskElement(task){
    //create the elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //set attributes
    taskEl.setAttribute('id', task.id);

    //add text to task element
    taskEl.appendChild(textEl);

    //add task element to list
    listEl.appendChild(taskEl);
}

//click handler to add a new task
function addTask(event){
    var inputEl = document.getElementById('input-task');
    if (inputEl.value != ''){
        //create a unique id
        var id = 'item-' + tasks.length;

        //create a new task
        var task = new Task(id,inputEl.value, taskStatus.active);
        tasks.push(task);

        //add task to the DOM
        addTaskElement(task);

        //reset input
        inputEl.value = '';
    }
}

//click handler to complete task
function completeTask(event){
    //get the task element
    var taskEl = event.target;
    var id = taskEl.id;

    //find the corresponding task in tasks array and update status
    for(var i = 0; i < tasks.length; i++){
        if (tasks[i].id === id){
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    //move task element from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

//this is optional - key press handler to automatically click add task button
function clickButton(event){
    if (event.keyCode === 13){
        document.getElementById('add-task').click();
    }
}

//initialized the app
function init(){
    //wire up the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //wire up the task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();