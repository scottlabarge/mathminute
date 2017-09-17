window.gameIndex = 0
window.answerArray = []
window.topRowNumbers
window.bottomRowNumbers


window.addEventListener('load', function() {
  initialize();
})


function initialize() {
    topRowNumbers = createRowNumbers()
    bottomRowNumbers = createRowNumbers()
    
    newEquation();
    
    setTimeout(finish, 5000);
}

function finish() {
    
    alert("time up")
    correctAnswers();
    // console.log(correctAnswers());
    // console.log(incorrectAnswers());
}

function correctAnswers() {
    var length = answerArray.length     

    
    for (i = 0; i < length; i++) { 
        var answer = answerArray[i]
        var firstNumber = topRowNumbers[i]    
        var secondNumber = bottomRowNumbers[i]    
        var correctAnswer = firstNumber * secondNumber
        var test = (answer === correctAnswer)
        console.log(test)
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
    logAnswer();
    newEquation();
}

function logAnswer(){
    var input = document.getElementById("answer")
    var answer = input.value
    var integer = parseInt(answer)
    
    answerArray.push(integer)
    
    input.value = ""
    
    console.log(answerArray)
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
