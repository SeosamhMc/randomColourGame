var score = 0;
var gamesPlayed = 0;
var leftDist = 0;
var rightDist = 0;
randomise = function() {
  var colour = "";
  var left = "";
  var right = "";
  for (var i=0; i < 3; i++) {
    colour += getRandomNumber();
    left += getRandomNumber();
    right += getRandomNumber();
  }
  colour = colour.toUpperCase();
  left = left.toUpperCase();
  right = right.toUpperCase();
  document.getElementById("square2").style.backgroundColor = "#" + colour;
  document.getElementById("square1").style.backgroundColor = "#" + left;
  document.getElementById("square3").style.backgroundColor = "#" + right;
  var leftNum = getColourNum(left);
  var centNum = getColourNum(colour);
  var rightNum = getColourNum(right);
  leftDist = 0;
  rightDist = 0;
  for (var i = 0; i < 3; i++) {
    leftDist += (centNum[i] - leftNum[i]);
    rightDist += (centNum[i] - rightNum[i]);
    console.log(leftDist+" l,r "+rightDist);
  }
  leftDist=Math.abs(leftDist);
  rightDist=Math.abs(rightDist);
  
  console.log(leftDist, rightDist);
}

getRandomNumber = function() {
  var number = (Math.random() * 255);
  number = Math.round(number);
  number = number.toString(16);
  while (number.length < 2) { //Deals with Leading 0
    number = "0" + number;
  }
  return number;
}

answer = function(side) {
  if (side == "right") {
    if (leftDist >= rightDist) {
      score++;
    }
  }
  else if (side == "left") {
    if (rightDist >= leftDist) {
      score++;
    }
  }
  gamesPlayed++;
  randomise();
  result();
}
result = function() {
  document.getElementById("result").innerHTML = "(Score: " + score + "/" + gamesPlayed + ")";
}

getColourNum = function(colour) {
  var R = parseInt(colour.substring(0, 2), 16);
  var G = parseInt(colour.substring(2, 4), 16);
  var B = parseInt(colour.substring(4, 6), 16);
  var RGB = [R, G, B];
   console.log(RGB);
  return RGB;
}
