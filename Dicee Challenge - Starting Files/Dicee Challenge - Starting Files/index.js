var randn = Math.ceil(Math.random()*6);
var diceName = "dice"+randn+".png";
var diceLoc = "images/" + diceName;

document.querySelectorAll("img")[0].setAttribute("src", diceLoc);

var randn2 = Math.ceil(Math.random()*6);
var diceName2 = "dice"+randn2+".png";
var diceLoc2 = "images/" + diceName2;

document.querySelectorAll("img")[1].setAttribute("src", diceLoc2);

if(randn > randn2){
  document.querySelector("h1").innerHTML = "🎗️Player 1 wins!";
} else if(randn < randn2){
  document.querySelector("h1").innerHTML = "🎗️Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Match Tie";
}
