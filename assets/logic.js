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
        var timeBlock = $("time-block");

        for (var i = 0; i < timeBlock.length; i++) {
            var hourRow = timeBlock[i];

            if (parseInt(hourRow.id.split("-")[0]) < currentTime) {
                $(hourRow).addClass("past")
            }
        }


    }

    scheduleUpdater();
    dateTime();
});


