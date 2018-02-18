window.onload = function() {
    var outputAnswer = document.querySelector('.answer span'),
        inputNumber = document.querySelector('input[data-function="number"]'),
        number = 0,
        result = 0;
        
    inputNumber.onchange = function() {       
        number = +document.querySelector('input[data-function="number"]').value;
        findX(number);
    };

    function  findX(number) {        

        if (checkConditions(number)) {
            outputAnswer.innerHTML = result;
            return;
        }        

        result = 0;

        for (var i = 0; i < number; i++) {
            var sum = i;
            var line = String(i);

            for (var j = 0; j < line.length; j++) {
                sum += ( +line[j] );
            }

            if (sum == number) {
                if (result) result += (i + " ");
                else result = i + " ";
            }
        }
        
        outputAnswer.innerHTML = result;
    }

    function checkConditions(number) {
        if (number < 0) {
            result = 'Incorrect number. Please change it.';
            return true;
        }

        return false;
    }
};