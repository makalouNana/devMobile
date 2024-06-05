function addTask() {
    let taskFieldText = document.getElementById("taskFieldText");
    const taskList = document.getElementById("taskList");

    if (taskFieldText.value) {
        const liElement = document.createElement("li");
        liElement.innerHTML = taskFieldText.value;
        liElement.classList.add('task-item');
        $(liElement).on("swiperight", handleRightSwipe);
        $(liElement).on("swipeleft", handleLeftSwipe);

        taskList.appendChild(liElement);
        $("#taskList").listview("refresh");

        taskFieldText.value = '';
        $("#taskFieldText").focus();
    }
}

function resetList() {
    document.getElementById("taskList").innerHTML = '';
    document.getElementById("completedTaskList").innerHTML = '';
}

function handleRightSwipe(event) {
    if (event.target) {
        const taskList = document.getElementById("taskList");
        const completedTaskList = document.getElementById("completedTaskList");
        const targetElement = event.target;

        if (targetElement.parentElement.id === "taskList") {
            completedTaskList.appendChild(targetElement);
            targetElement.classList.add('swipe-right');
            setTimeout(() => {
                targetElement.classList.remove('swipe-right');
            }, 300);
        } else {
            taskList.appendChild(targetElement);
        }

        $("#taskList").listview("refresh");
        $("#completedTaskList").listview("refresh");
    }
}

function handleLeftSwipe(event) {
    if (event.target) {
        const targetElement = event.target;
        targetElement.classList.add('swipe-left');
        setTimeout(() => {
            targetElement.parentElement.removeChild(targetElement);
        }, 300);
    }
}
