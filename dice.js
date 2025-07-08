
var nu1 = Math.floor(Math.random() * 6) + 1 ;
var nu2 = Math.floor(Math.random() * 6) + 1 ;
var randomstring1 = "images/dice" + nu1 + ".png";
var randomstring2 = "images/dice" + nu2 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomstring1);
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomstring2);
if( nu1 > nu2) {
    document.querySelector("h1").innerHTML = " Player 1 wins";
}
else if(nu1 < nu2){
    document.querySelector("h1").innerHTML = " Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}