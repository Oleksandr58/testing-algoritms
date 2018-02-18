window.onload = function() {
    var outputAnswer = document.querySelector('.answer span'),
        inputData = document.querySelector('input[data-function="data"]'),
        data,
        plates,
        piecesFirstCake,
        piecesSecondCake,
        result = 0;
        
    inputData.onchange = function() {       
        data = document.querySelector('input[data-function="data"]').value.split(' ');
        plates = +data[0];
        piecesFirstCake = +data[1];
        piecesSecondCake = +data[2];
        findMinimumPiecesInPlate(plates, piecesFirstCake, piecesSecondCake);
    };

    function findMinimumPiecesInPlate(plates, piecesFirstCake, piecesSecondCake) {        

        if (checkConditions(plates, piecesFirstCake, piecesSecondCake)) {
            outputAnswer.innerHTML = result;
            return;
        }        

        result = 1;

        for (var i = 2; i < plates; i++) {
            if (piecesFirstCake > piecesSecondCake) {
                piecesFirstCake /= 2;
            } else {
                piecesSecondCake /= 2;
            }
        }
        
        result = Math.min(Math.floor(piecesFirstCake), Math.floor(piecesSecondCake)) || 1;
        outputAnswer.innerHTML = result;
    }

    function checkConditions(plates, piecesFirstCake, piecesSecondCake) {
        if (plates < 2) {
            result = 'Incorrect number of plates. Please change it.';
            return true;
        }

        if (piecesFirstCake < 1) {
            result = 'Incorrect pieces of first cake. Please change it.';
            return true;
        }

        if (piecesSecondCake < 1) {
            result = 'Incorrect pieces of second cake. Please change it.';
            return true;
        }

        return false;
    }
};