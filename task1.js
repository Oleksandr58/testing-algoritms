window.onload = function() {
    var hours,
        minutes, 
        outputAnswer = document.querySelector('.answer span'),
        snoozeInterval, 
        inputSnoozeInterval = document.querySelector('input[data-function="snooze"]'),
        inputTime = document.querySelector('input[data-function="time"]'),
        time,
        result = 0,
        luckyNumber = 7;
        
    inputTime.onchange = function() {
        readData();
        findLuckyHours(snoozeInterval, hours, minutes);
    };

    inputSnoozeInterval.onchange = function() {
        readData();
        findLuckyHours(snoozeInterval, hours, minutes);
    };
    
    function readData() {
        snoozeInterval = +document.querySelector('input[data-function="snooze"]').value;
        time = document.querySelector('input[data-function="time"]').value.split(' ');
        hours = +time[0];
        minutes = +time[1];
    }

    function  findLuckyHours(snoozeInterval, hours, minutes) {        

        if (checkConditions(hours, minutes, snoozeInterval)) {
            outputAnswer.innerHTML = result;
            return;
        }        

        result = 0;

        while (!(hours % 10 == luckyNumber || (hours / 10) % 10 == luckyNumber || minutes % 10 == luckyNumber || (minutes / 10) % 10 == luckyNumber)) {
            if (minutes < snoozeInterval) {
                hours--;
                minutes += 60;
            }
            
            if (hours < 0) hours = 23;
            
            minutes -= snoozeInterval;
            result++;
        }
        
        outputAnswer.innerHTML = result;
    }

    function checkConditions(hours, minutes, snoozeInterval) {
        if (hours > 23 || hours < 0 || !hours) {
            result = 'Incorrect hours. Please change it.';
            return true;
        }

        if (minutes > 59 || minutes < 0 || !minutes) {
            result = 'Incorrect minutes. Please change it.';
            return true;
        }

        if (snoozeInterval < 0 || !snoozeInterval) {
            result = 'Incorrect snooze interval. Please change it.';
            return true;
        }

        return false;
    }
};