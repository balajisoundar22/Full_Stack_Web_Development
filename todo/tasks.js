let tasks = [];

function addTask() {
    let taskInput = document.getElementById("addTaskBox");
    let taskList = document.getElementById("taskListBox");
    if (taskInput.value.trim() != "") {
        tasks.push(taskInput.value);
        updateTaskList(taskList);
        taskInput.value = "";
    }
}

function updateTaskList(taskList) {
    taskList.value = "";
    for (let i = 0; i < tasks.length; i++) {
        taskList.value += tasks[i] + "\n";
    }
}

function nextTask() {
    let nextTaskInput = document.getElementById("nextTaskBox");
    if (tasks.length > 0) {
        nextTaskInput.value = tasks.shift();
        updateTaskList(document.getElementById("taskListBox"));
    } else {
        nextTaskInput.value = "No more tasks!";
    }
}

window.onload = function() {
    updateTaskList(document.getElementById("taskListBox"));
}