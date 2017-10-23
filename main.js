window.gameIndex = 0
window.answerArray = []
window.topRowNumbers
window.bottomRowNumbers
window.booleanArray = [];
window.equationArray = [];


window.addEventListener('load', function() {
  initialize();
})


function initialize() {
    topRowNumbers = createRowNumbers()
    bottomRowNumbers = createRowNumbers()
    
    newEquation();
    
    setTimeout(finish, 20000);
}

function finish() {
    correctAnswers();
    
    var trues = trueCount(booleanArray);
    var falses = falseCount(booleanArray);
    
    var string = "Number Correct: " + trues.toString() + ".  Number Incorrect: " + falses.toString()
    
    alert("time up");
    alert(string);
    alert(equationArray);
    // console.log(correctAnswers());
    // console.log(incorrectAnswers());
}

function trueCount(array) {
    var trueCount = 0
    
    for (i = 0; i < array.length; i++ ) {
        var statement = array[i]           
    
        if ( statement === true ) {
            trueCount++
        }
    }
    
    return trueCount
}

function falseCount(array) {
    var falseCount = 0
    
    for (i = 0; i < array.length; i++ ) {
        var statement = array[i]           
    
        if ( statement === false ) {
            falseCount++
        }
    }
    
    return falseCount
}

function correctAnswers() {
    var length = answerArray.length     

    
    for (i = 0; i < length; i++) { 
        var answer = answerArray[i]
        var firstNumber = topRowNumbers[i]    
        var secondNumber = bottomRowNumbers[i]    
        var correctAnswer = firstNumber * secondNumber
        var boolean = (answer === correctAnswer)
        booleanArray.push(boolean)
        var equation = firstNumber.toString() + " x " + secondNumber.toString() + " = " + correctAnswer.toString() 
        equationArray.push(equation)
    }

}

function incorrectAnswers() {
    
}


function createRowNumbers(){
    var array = []
    
    for (i = 0; i < 100; i++) { 
        array.push(randomInteger())
    }

    return array
}

function randomInteger() {
    return Math.floor(Math.random() * 11);
}


function submitAnswer() {
    processAnswer();
    newEquation();
}

function processAnswer(){
    var input = document.getElementById("answer")
    var answer = input.value
    var integer = parseInt(answer)
    
    answerArray.push(integer)
    
    input.value = ""
    
    // console.log(answerArray)
}

function newEquation() {
    
    var topNumber = topRowNumbers[gameIndex]
    
    var element = document.getElementById("top")
    
    element.innerHTML = topNumber
    
    var bottomNumber = bottomRowNumbers[gameIndex]

    var anotherElement = document.getElementById("bottom")
    
    anotherElement.innerHTML = bottomNumber;
    
    gameIndex = gameIndex + 1
}
