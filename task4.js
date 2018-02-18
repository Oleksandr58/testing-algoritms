window.onload = function() {
    var indexes,
        vertexes, 
        outputAnswer = document.querySelector('.answer span'),
        inputVertexes = document.querySelector('input[data-function="vertexes"]'),
        inputIndexes = document.querySelector('input[data-function="indexes"]'),
        result = 'No';
        
        inputVertexes.onchange = function() {
        readData();
        isSprute(vertexes, indexes);
    };

    inputIndexes.onchange = function() {
        readData();
        isSprute(vertexes, indexes);
    };
    
    function readData() {
        vertexes = +document.querySelector('input[data-function="vertexes"]').value;
        indexes = document.querySelector('input[data-function="indexes"]').value.split(' ');
        indexes = changeStringArrToNumber(indexes);
    } 
    
    function changeStringArrToNumber (arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = (+arr[i]);
        }

        return arr;
    }

    function isSprute(vertexes, indexes) {        
        var leafs = [];

        if (checkConditions(vertexes, indexes)) {
            outputAnswer.innerHTML = result;
            return;
        }        

        result = 'No';

        for (var i = 0; i < indexes.length; i++) {
            if (indexes[i] == 1) {
                leafs.push(i);
            } else if (leafs.indexOf(indexes[i]) + 1) {
                leafs.splice(leafs.indexOf(indexes[i]), 1);
            }
        }
        
        if (leafs.length >= 3) result = "Yes";

        outputAnswer.innerHTML = result;
    }

    function checkConditions(vertexes, indexes) {
        if (vertexes < 3) {
            result = 'Incorrect number of vertexes (need start from 3). Please change it.';
            return true;
        }

        if (indexes.length != vertexes - 1) {
            result = 'Incorrect indexes value. Please change it.';
            return true;
        }
    
        for (var i = 0; i < indexes.length; i++) {
            if (indexes[i] <= 0) {
                result = 'Value of ' + i + '-th index incorrect. Please change it.';
                return true;
            }
        }

        return false;
    }
};