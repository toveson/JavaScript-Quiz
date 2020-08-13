// global vars
var startingMinutes = parseInt(20);
var timeCount = startingMinutes * 60;


// timer

// updates timer every second
setInterval(updateTime, 1000);

function updateTime() {
    var minutesCount = Math.floor(timeCount / 60);
    var secondsCount = timeCount % 60;

    secondsCount = secondsCount < 10 ? '0' + secondsCount : secondsCount;
    document.getElementById('countdown').innerHTML = minutesCount + ':' +secondsCount
    timeCount--;
}
console.log(timeCount);


// I need an array of High scores
// I need an array to hold questions
// I need an array to hold answers for each question
// I need a function to start the quiz
// I need a function to control the question number
// I need a function to display the quiz question
// I need a function to display the quiz possible answers
// I need a function to check the selected answer
   //in this function if the answer is correct, move on to the next question and change color of spinner to green
   //if the answer is incorrect I need to remove time as a penalty and change the spinner color to red
   // after moving on to the next question change the question number
// I need a temporary array to hold the amount of questions ther user got correct
// when the quiz is complete I will ask the user for their initials
// after the user submits their initials I will store their score in the High score array (w/initials)
// if the user beats one of the high scores I need to display their score above the ones they beat
// I will do this with a function to display the list in order of score from high to low

