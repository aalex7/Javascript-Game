function gameBegin (){
  
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1; //gives a random number beween 1 and 6
var randomDiceImage="dice"+randomNumber1+".png"; //dice1.png-dice6.png
var randomImageSource="images/"+randomDiceImage; //images/dice1.png-images/dice6.png

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1; //gives a random number beween 1 and 6
var randomDiceImage2="dice"+randomNumber2+".png"; //dice1.png-dice6.png
var randomImageSource2="images/"+randomDiceImage2; //images/dice1.png-images/dice6.png

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var image2=document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomImageSource>randomImageSource2) {
	document.querySelector("h1").innerHTML="🚩He wins";
} else if (randomImageSource<randomImageSource2) {
		document.querySelector("h1").innerHTML="She wins🚩";
} else {
	document.querySelector("h1").innerHTML="Draw";
}
}
