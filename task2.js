window.onload = function() {
    var buckets,
        lengthGarden, 
        bucketsGarden,
        outputAnswer = document.querySelector('.answer span'),
        inputBucketsGarden = document.querySelector('input[data-function="buckets-garden"]'),
        inputValueBuckets = document.querySelector('input[data-function="value-buckets"]'),
        result = Infinity,
        valueBuckets;
        
    inputBucketsGarden.onchange = function() {
        readData();
        findSmallestHours(buckets, lengthGarden, valueBuckets);
    };

    inputValueBuckets.onchange = function() {
        readData();
        findSmallestHours(buckets, lengthGarden, valueBuckets);
    };
    
    function readData() {
        bucketsGarden = document.querySelector('input[data-function="buckets-garden"]').value.split(' ');
        buckets = +bucketsGarden[0];
        lengthGarden = +bucketsGarden[1];
        valueBuckets = document.querySelector('input[data-function="value-buckets"]').value.split(' ');
        valueBuckets = changeStringArrToNumber(valueBuckets);
    } 
    
    function changeStringArrToNumber (arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = (+arr[i]);
        }

        return arr;
    }

    function findSmallestHours(buckets, lengthGarden, valueBuckets) {        

        if (checkConditions(buckets, lengthGarden, valueBuckets)) {
            outputAnswer.innerHTML = result;
            return;
        }        

        result = Infinity;

        for (var i = 0; i < valueBuckets.length; i++) {
            var value = 0,
                hours = 0;
            while (value < lengthGarden) {
                value += valueBuckets[i];
                hours ++;
                if (value == lengthGarden) {
                    if (hours < result) result = hours;
                }
            }
        }
        
        outputAnswer.innerHTML = result;
    }

    function checkConditions(buckets, lengthGarden, valueBuckets) {
        if (buckets < 1) {
            result = 'Incorrect number of buckets. Please change it.';
            return true;
        }

        if (lengthGarden < 1) {
            result = 'Incorrect length of garden. Please change it.';
            return true;
        }

        if (valueBuckets.length != buckets) {
            result = 'You didn\'t enter value of all buckets. Please change it.';
            return true;
        }
    
        for (var i = 0; i < buckets.length; i++) {
            if (buckets[i] <= 0) {
                result = 'Value of ' + i + '-th bucket incorrect. Please change it.';
                return true;
            }
        }

        return false;
    }
};