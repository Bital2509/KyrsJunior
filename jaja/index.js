var sumResult = document.getElementById('sumResult');
var button = document.getElementById('result');
var expressionButton = document.getElementById('expressionButton');
var expressionResult = document.getElementById('expressionResult');

button.addEventListener('click', function () {
    var ferstNumber = document.getElementById("firstNumber");
    var secondNumber = document.getElementById("secondNumber");
    var thirdNumber = document.getElementById("thirdNumber");
    if (ferstNumber.value === '' || secondNumber.value === '' || thirdNumber.value === '') {
        alert("Таак, А ну ка ввел значения!!")
    } else {
        var sum = parseInt(ferstNumber.value) + parseInt(secondNumber.value) + parseInt(thirdNumber.value);

        sumResult.className += ' sum-result_active';
        sumResult.innerHTML = ferstNumber.value + " + " + secondNumber.value + " + " + thirdNumber.value + " = " + sum;
    }
});

expressionButton.addEventListener('click', function () {
    var ferstExpression = document.getElementById("firstExpression");
    var secondExpression = document.getElementById("secondExpression");
    var thirdExpression = document.getElementById("thirdExpression");
    if (ferstExpression.value === '' || secondExpression.value === '' || thirdExpression.value === '') {
        alert("Таак, А ну ка ввел значения!!")
    } else {
        var multiplicationExpression = parseInt(ferstExpression.value) * parseInt(secondExpression.value) * parseInt(thirdExpression.value);
        var sumExpression = parseInt(ferstExpression.value) + parseInt(secondExpression.value) + parseInt(thirdExpression.value);

        expressionResult.className += ' sum-result_active';
        if (multiplicationExpression > sumExpression) {
            expressionResult.innerHTML = "<p>" + ferstExpression.value + " * " + secondExpression.value + " * " + thirdExpression.value + " = " + multiplicationExpression + "</p>" + "<p>"
                + ferstExpression.value + " + " + secondExpression.value + " + " + thirdExpression.value + " = " + sumExpression + "</p>" + "<p>" + multiplicationExpression + " Больше чем " + sumExpression + "</p>"
                + "<p> + 3 к большему: " + (multiplicationExpression + 3) + "</p>";
        } else {

            expressionResult.innerHTML = "<p>" + ferstExpression.value + " * " + secondExpression.value + " * " + thirdExpression.value + " = " + multiplicationExpression + "</p>" + "<p>"
                + ferstExpression.value + " + " + secondExpression.value + " + " + thirdExpression.value + " = " + sumExpression + "</p>" + "<p>" + sumExpression + " Больше чем " + multiplicationExpression + "</p>"
                + "<p> + 3 к большему: " + (sumExpression + 3) + "</p>";
        }
    }
});

var pointButton = document.getElementById("pointButton");

pointButton.addEventListener('click', function () {
    let x = prompt('ВВЕДИТЕ x:', '');
    let y = prompt('ВВЕДИТЕ y:', '');
    if (x == 0 || y == 0)
        alert((x == 0 && y == 0) ? 'Центр координат' : 'ось ' + ((x == 0 ? 'Y' : 'X')));
    else {
        let horizontal = (x > 0 ? [1, 2] : [3, 4]);
        let vertical = (y > 0 ? [1, 4] : [2, 3]);
        horizontal.forEach(el => {
            if (vertical.includes(el)) alert(el + ' четверть')
        });
    }
});

var massButton = document.getElementById('massButton');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


var massResult = document.getElementById('massResult');

massButton.addEventListener('click', function () {
    massResult.className += ' sum-result_active';

    let massN = document.getElementById("massN").value;

    let randomer = getRndInteger(0, 20);
    let arr = [];
    let arrRand = new Array(randomer);
    let k = 0;
    let result = '';
    if (isFinite(massN)) {
        massResult.innerHTML = "<p>Количество элементов введенное в ручную:" + massN + "</p>";

        for (let i = 0; i < massN; i++) {
            arr[i] = getRndInteger(-10, 20);
            result += arr[i] + '  ';
            k++;
        }
        massResult.innerHTML += "<p>Массив который получился: " + result + "<br/>Число проходов = " + k + "</p>";

        let max = arr[0];
        let min = arr[0];
        let maxIndex = 0;
        let minIndex = 0;

        for (let i = 1; i < massN; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
            if (arr[i] < min) {
                minIndex = i;
                min = arr[i];
            }
        }
        massResult.innerHTML += "<p>Максимальное значение в массиве = " + max + "<br/>Его индекс = " + maxIndex + "</p>";
        massResult.innerHTML += "<p>Минимальное значение в массиве = " + min + "<br/>Его индекс = " + minIndex + "</p>";

        let oddNumber = 0;
        let oddIndex;
        let oddSum = 0;

        massResult.innerHTML += "<p>Сумма нечетных элементов: </p>";
        for (let i = 0; i < massN; i++) {
            if (i % 2 !== 0) {
                oddIndex = i;
                oddNumber = arr[i];
                massResult.innerHTML += "<br/> Нечетное число:" + oddNumber + "<br/>Его индекс: " + oddIndex + "<br/>";
                oddSum = oddSum + oddNumber;
            }
        }
        massResult.innerHTML += "<p>" + oddSum + "</p>"
    } else if (massN === "Rand" || massN === "r") {
        massResult.innerHTML = "<p>Количество элементов введенное рандомно:" + randomer + "</p>";
        let resultRand = '';
        for (let j = 0; j < arrRand.length; j++) {
            arrRand[j] = getRndInteger(-10, 20);
            resultRand += arrRand[j] + '  ';
            k++;
        }
        massResult.innerHTML += "<p>Массив который получился: " + resultRand + "<br/>Число проходов = " + k + "</p>";

        let max = arrRand[0];
        let min = arrRand[0];
        let maxIndex = 0;
        let minIndex = 0;

        for (let j = 1; j < arrRand.length; j++) {
            if (arrRand[j] > max) {
                maxIndex = j;
                max = arrRand[j];
            }
            if (arrRand[j] < min) {
                minIndex = j;
                min = arrRand[j];
            }
        }
        massResult.innerHTML += "<p>Максимальное значение в массиве = " + max + "<br/>Его индекс = " + maxIndex + "</p>";
        massResult.innerHTML += "<p>Минимальное значение в массиве = " + min + "<br/>Его индекс = " + minIndex + "</p>";

        let oddNumber = 0;
        let oddIndex;
        let oddSum = 0;

        massResult.innerHTML += "<p>Сумма нечетных элементов: </p>";
        for (let j = 0; j < arrRand.length; j++) {
            if (j % 2 !== 0) {
                oddIndex = j;
                oddNumber = arrRand[j];
                massResult.innerHTML += "<br/> Нечетное число:" + oddNumber + "<br/>Его индекс: " + oddIndex + "<br/>";
                oddSum = oddSum + oddNumber;
            }
        }
        massResult.innerHTML += "<p>" + oddSum + "</p>"
    } else {
        alert("Возможно вы ввели что-то не верно !");
    }
});

var sum1of99Button = document.getElementById('sum1of99Button');

sum1of99Button.addEventListener('click', function () {
    let sumOneOfNine = document.getElementById('sumOneOfNine').value;
    let sum1of99 = document.getElementById('sum1of99');

    sum1of99.className += ' sum-result_active';

    let arr = [];
    let k = 0;
    let result = '';

    for (let i = 0; i < sumOneOfNine; i++) {
        arr[i] = getRndInteger(-10, 20);
        result += arr[i] + '  ';
        k++;
    }

    sum1of99.innerHTML = "<p>Массив который получился: " + result + "<br/>Число проходов = " + k + "</p>";

    let sum = 0;

    for (let i = 0; i < sumOneOfNine; i++) {
        sum += arr[i];
    }

    sum1of99.innerHTML += "<p>Сумма чисел: " + sum + "</p>";

    let simpleNum = 0;
    let firstNum = 0;
    let secondNum = 0;

    for (let i = 0; i < sumOneOfNine; i++) {
        firstNum = arr[i] % 2;
        secondNum = arr[i];
        if (firstNum !== 0 && secondNum !== 1) {
            simpleNum = arr[i];
            sum1of99.innerHTML += "<p>простое число: " + simpleNum + "</p>";
        }
    }

    let sqrt = 0;

    for (let i = 0; i < sumOneOfNine; i++) {
        if (arr[i] >= 0) {
            sqrt = Math.round(Math.sqrt(arr[i]));
            sum1of99.innerHTML += "<p>корень натурального числа: " + arr[i] + " : " + sqrt + "</p>";
        }
    }

});

var factorialButton = document.getElementById('factorialButton');

factorialButton.addEventListener('click', function () {

    let number = prompt('Введите положительное число');
    let factorialblock = document.getElementById('factorialblock');

    factorialblock.className += ' sum-result_active';

    let resultat = 1;
    let firstNumber = number;
    let secondNumber = 0;

    for (let i = 0; i < number; i++) {
        secondNumber = firstNumber - 1;
        if (secondNumber !== 0) {
            resultat *= (secondNumber);
            firstNumber = secondNumber
        }
    }
    resultat *= number;

    factorialblock.innerHTML = "<p> факториал числа " + number + ": " + resultat + "</p>";

    let sum = 0, tmp;
    let num = resultat;

    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }

    factorialblock.innerHTML += "<p> сумма числа " + resultat + ": " + sum + "</p>";

    let rez = resultat;
    let reverse;
    let revend = '';


    while (rez) {
        reverse = rez % 10;
        rez = (rez - reverse) / 10;
        revend += reverse + '';
    }

    factorialblock.innerHTML += "<p> Зеркало числа " + resultat + ": " + revend + "</p>";
});