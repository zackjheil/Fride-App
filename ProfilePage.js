window.onload = function() {
document.getElementById("Header").focus();
}

var x = document.getElementById("FirstName_Form");
var y = document.getElementById("LastName_Form");
var z = document.getElementById("SubmitButton");

button.onclick = function(){
    ReplaceFirstName(x.value),
    ReplaceLastName(y.value);
};

var ReplaceLastName = function(LastName){
    var LastNameChange = (LastName);
}



var word = document.getElementById('word'),
    originalStory = document.getElementById('story'),
    button = document.getElementById("submitButton");

button.onclick = function(){
    replaceStory(word.value);
};

var replaceStory = function(userWord) {
    var story = ("A " + userWord + " is now part of the story");

    return originalStory.innerHTML = story;
};