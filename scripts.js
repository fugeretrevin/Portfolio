var rach2sound1 = new Audio('./Music/rach2mvt1.mp3');
var rach2sound2 = new Audio('./Music/rach2mvt2.mp3');
var sound1 = new Audio("../BestThings/Music/sound1.mp3");
function playSound(sound)
{
    sound.play();
}

const greetingDiv = document.getElementById('greeting-text');
const hour = new Date().getHours();

let greeting;

if (hour >= 4 && hour < 12) {
    greeting = "Good Morning,";
}
else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon,";
}
else {
    greeting = "Good Evening,";
}

greetingDiv.textContent = greeting;