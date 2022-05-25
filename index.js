//First dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Generates a random number between 1 and 6

var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //Selects the image of the first dice


//Second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//Change title according to the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}