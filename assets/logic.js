$(document).ready(function () {

    var saveBtn = $('.saveBtn');

    saveBtn.on('click', function() {
        console.log("test");

        var userInput = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id')

        if (userInput === "") {
            alert("Please enter an appointment to save to calendar!")}
        else {
            localStorage.setItem(time, userInput)
            alert("Appintment has been saved to calendar!")
        }
    })
    
    function dateTime() {
        now = moment().format('MMMM Do, YYYY [at] hh:mm:ss a');
        document.getElementById('currentDay').innerHTML = now;
        setInterval(function () { 
            dateTime(); 
        }, 1000);
    };

    function scheduleUpdater () {
        var currentTime = moment().hour();
        var timeBlock = $(".time-block");

        console.log(currentTime);

        for (var i = 0; i < timeBlock.length; i++) {
            var hourRow = timeBlock[i];

            var updateHourRow = parseInt(hourRow.id.split("hour-")[1]);

            console.log(updateHourRow);

            if (updateHourRow < currentTime) {
                $(hourRow).addClass("past");
            } else if (updateHourRow === currentTime) {
                $(hourRow).removeClass("past");
                $(hourRow).addClass("present");
            } else {
                $(hourRow).addClass("future");
                $(hourRow).removeClass("past");
                $$(hourRow).removeClass("present");
            }
        }
    }


    $('#hour-9 .description').val(localStorage.getItem("hour-9"));
    $('#hour-10 .description').val(localStorage.getItem("hour-10"));
    $('#hour-11 .description').val(localStorage.getItem("hour-11"));
    $('#hour-12 .description').val(localStorage.getItem("hour-12"));
    $('#hour-13 .description').val(localStorage.getItem("hour-13"));
    $('#hour-14 .description').val(localStorage.getItem("hour-14"));
    $('#hour-15 .description').val(localStorage.getItem("hour-15"));
    $('#hour-16 .description').val(localStorage.getItem("hour-16"));
    $('#hour-17 .description').val(localStorage.getItem("hour-17"));

    scheduleUpdater();
    dateTime();
});


