var randomNum1 = Math.floor(Math.random() * 6) + 1;

var source1 = "images/dice" + randomNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", source1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var source2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", source2);

if (randomNum1 > randomNum2) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins";
}
else if (randomNum1 < randomNum2) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins";
}
else {
  document.getElementsByTagName("h1")[0].innerHTML = "Tied";
}
