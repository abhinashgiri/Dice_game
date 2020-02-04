// Player1
var n1=Math.floor(Math.random()*6+1);
var imagesrc="images/dice" + n1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",imagesrc);


// Player 2
var n2=Math.floor(Math.random()*6+1);
var imagesrc="images/dice" + n2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",imagesrc);

// Winner
if(n1===n2)
document.querySelector(".heading").innerHTML="DRAW!";
if(n1>n2)
document.querySelector(".heading").innerHTML="🚩Player1 Wins!";
if(n1<n2)
document.querySelector(".heading").innerHTML="Player2 Wins! 🚩";
