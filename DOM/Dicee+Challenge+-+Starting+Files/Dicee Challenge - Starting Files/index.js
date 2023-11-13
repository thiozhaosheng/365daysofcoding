var RandomNumnber1 = Math.floor(Math.random()*6) + 1;
var RandomNumnber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + RandomNumnber1 + ".png";
var randomDiceImage2 = "dice" + RandomNumnber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImageSource);
image2.setAttribute("src",randomImageSource2);

if(RandomNumnber1 > RandomNumnber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if(RandomNumnber2 > RandomNumnber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML = "TIE!";
}