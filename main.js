var index = 0


function nextEquation() {
    
    var topNumber = topRowNumbers()[index]
    
    var element = document.getElementById("top")
    
    element.innerHTML = topNumber
    
    var bottomNumber = bottomRowNumbers()[index]
    
    var anotherElement = document.getElementById("bottom")
    
    anotherElement.innerHTML = bottomNumber
    
    index = index + 1
}

function topRowNumbers() {
   return [2,3,4,5,6,7,8,9];
}

function bottomRowNumbers() {
   return [6,7,5,4,8,1,9,2];
}