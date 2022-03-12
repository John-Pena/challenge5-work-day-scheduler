var tasks = [];

// call this function to pass the date
$(document).ready(function () {
    $('#currentDay').text(moment().format('ddd MMM Do YYYY'));
});

$('.saveBtn').click(function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
});

var loadTasks = function() {
    var savedTasks = localStorage.getItem("tasks");

    if (!savedTasks) {
        return false;
    }

    console.log('saved tasks found!');
}