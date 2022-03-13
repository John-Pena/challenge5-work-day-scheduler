// call this function to pass the date
$(document).ready(function () {
    // displays current date
    $('#currentDay').text(moment().format('ddd MMM Do YYYY'));
});

console.log($('[data-time]')) 
// function that runs and compares current time to DOM and turns it gray
$('[data-time]').each(function(index) {
    console.log(index + ": " + $(this).attr('id'));
    // checks if current is greater than time on dom
    if (moment().hour() > parseInt($(this).attr('data-time'))) {
        $(this).parent().next().addClass('past');
    }
    // checks to see if the current time matches an id on the dom and turns it green
    else if (moment().hour() === parseInt($(this).attr('data-time'))) {
        $(this).parent().next().addClass('present');
    }
    // will turn future times green
    else {
        $(this).parent().next().addClass('future');
    }
});

// function to save tasks into local storage
$('.saveBtn').click(function() {
    console.log($(this).prev().val());
    // save text input into localStorage as value
    var text = $(this).prev().val();
    // saves time attribute to Local Sotrage as key value
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
});

var loadTasks = function() {
    $('#text9').text(localStorage.getItem('hour-9'));
    $('#text10').text(localStorage.getItem('hour-10'));
    $('#text11').text(localStorage.getItem('hour-11'));
    $('#text12').text(localStorage.getItem('hour-12'));
    $('#text1').text(localStorage.getItem('hour-13'));
    $('#text2').text(localStorage.getItem('hour-14'));
    $('#text3').text(localStorage.getItem('hour-15'));
    $('#text4').text(localStorage.getItem('hour-16'));
    $('#text5').text(localStorage.getItem('hour-17'));

    console.log('saved tasks found!');
};

loadTasks();