var tasks = [];

// call this function to pass the date
$(document).ready(function () {
    $('#currentDay').text(moment().format('ddd MMM Do YYYY'));
});


console.log($('[data-time]')) 
$('[data-time]').each(function(index) {
    console.log(index + ": " + $(this).attr('id'));
    if (moment().hour() > parseInt($(this).attr('data-time'))) {
        $(this).parent().next().addClass('past');
    }

    else if (moment().hour() === parseInt($(this).attr('data-time'))) {
        $(this).parent().next().addClass('present');
    }

    else {
        $(this).parent().next().addClass('future');
    }
 
});

$('.saveBtn').click(function() {
    console.log($(this).prev().val());
   taskText = localStorage.setItem("data-time", $(this).prev().val());
});

var loadTasks = function() {
    var savedTasks = localStorage.getItem("tasks");

    if (!savedTasks) {
        return false;
    }

    console.log('saved tasks found!');
}