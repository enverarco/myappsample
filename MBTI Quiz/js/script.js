
document.getElementById("button1").addEventListener("click", ScrolltoQuestion2);
document.getElementById("button2").addEventListener("click", ScrolltoQuestion3);
document.getElementById("button4").addEventListener("click", ScrolltoResults);
document.getElementById("button5").addEventListener("click", ScrolltoTop);


let button1 = "button1";
let button2 = "button2";
let button4 = "button4";

//loop for adding event listeners to question 1 radio buttons
var inputs = document.getElementsByClassName("preference"),
    x=inputs.length;
while(x--)
    inputs[x].addEventListener("click", function(){ ButtonAppear(button1); });

//loop for adding event listeners to question 2 radio buttons
var inputs = document.getElementsByClassName("traits"),
    x=inputs.length;
while(x--)
    inputs[x].addEventListener("click", function(){ ButtonAppear(button2); });

//loop for adding event listeners to final question radio buttons
var inputs=document.querySelectorAll("input[name = career]"),
    x=inputs.length;
while(x--)
    inputs[x].addEventListener("click", function(){ ButtonAppear(button4); });

var type = "intp";

var introverted = 0, extraverted = 0, intuitive =0, sensory =0, thinking =0, feeling =0, judging =0, prospecting = 0;

var firstLetter = "", secondLetter = "", thirdLetter = "", fourthLetter = "";



function ButtonAppear(buttonId)
{
  document.getElementById(buttonId).style.visibility = "visible";
}

function ScrolltoQuestion2(){

  //Reveal question 2
  var q2class = document.getElementsByClassName('question2');

  for(var i = 0; i < q2class.length; i = i + 1) {
      q2class[i].style.display='block';
  }

  //scroll to question 2
  $('html, body').animate({
    scrollTop: $("#traits").offset().top
  }, 800, function(){

    window.location.hash = '#traits';
  });
};





function ScrolltoQuestion3(){

  var q3class = document.getElementsByClassName('question3');

  for(var i = 0; i < q3class.length; i = i + 1) {
      q3class[i].style.display='block';
  }

  $('html, body').animate({
    scrollTop: $("#career").offset().top
  }, 800, function(){


    window.location.hash = '#career';
  });
};

function ScrolltoQuestion4(){

  $('html, body').animate({
    scrollTop: $("#functions").offset().top
  }, 800, function(){


    window.location.hash = '#functions';
  });
};

function ScrolltoTop(){

  $('html, body').animate({
    scrollTop: $("#functions").offset().top
  }, 800, function(){


    window.location.hash = '#top';
  });
};

function ScrolltoResults(){



  var q5class = document.getElementsByClassName('result');

  for(var i = 0; i < q5class.length; i = i + 1) {
      q5class[i].style.display='block';
    }


//introverted, extraverted, sensory, intuitive, feeling, thinking, judging, prospecting = 0;

var preferences = [
	{name: 'introverted', score: 0},
  {name: 'extraverted', score: 0},
  {name: 'intuitive', score: 0},
  {name: 'sensory', score: 0},
  {name: 'feeling', score: 0},
  {name: 'thinking', score: 0},
  {name: 'judging', score: 0},
  {name: 'prospecting', score: 0}
];

//loop through ids on question 1 and add appropriote scores
for (var i = 0; i < preferences.length; i++)
{
  if(document.getElementById(preferences[i].name).checked)
  {
    preferences[i].score += 100;
  }
}

if(document.getElementById('developer').checked){
  introverted += 20;
  thinking += 20;
}
if(document.getElementById('teacher').checked){
  feeling += 20;
}
if(document.getElementById('entertainer').checked){
  sensory += 20;
}
if(document.getElementById('artist').checked){
  feeling += 20;
  prospecting += 20;
}
if(document.getElementById('police/military').checked){
  judging += 20;
}
if(document.getElementById('musician').checked){
  feeling += 20;
  prospecting += 20;
}
if(document.getElementById('engineer').checked){
  sensory += 20;
  judging += 20;
}
if(document.getElementById('realestateagent').checked){
  extraverted += 20;
}

if(document.getElementById('outgoing').checked){
  extraverted += 20;
}
if(document.getElementById('shy').checked){
  introverted += 20;
}
if(document.getElementById('active').checked){
  sensory += 20;
}
if(document.getElementById('forgetful').checked){
  intuitive += 20;
}
if(document.getElementById('rational').checked){
  thinking += 20;
}
if(document.getElementById('emotional').checked){
  feeling += 20;
}
if(document.getElementById('messy').checked){
  prospecting += 20;
}
if(document.getElementById('organised').checked){
  judging += 20;
}

//introverted > extraverted
if(preferences[0].score > preferences[1].score)
{
  firstLetter = "I";
}
//extraverted > inroverted
else if(preferences[1].score > preferences[0].score) {
  firstLetter = "E";
}else {
  firstLetter = "X";
}
//sensory > intuitive
if(preferences[3].score > preferences[2].score)
{
  secondLetter = "S";
}
//intuitive > sensory
else if (preferences[2].score > preferences[3].score){
  secondLetter = "N";
} else {
  secondLetter = "X";
}
//feeling > thinking
if(preferences[4].score > preferences[5].score)
{
  thirdLetter = "F";
}
//thinking > feeling
else if (preferences[5].score > preferences[4].score){
  thirdLetter = "T";
}else {
  thirdLetter = "X";
}
//judging > prospecting
if(preferences[6].score > preferences[7].score)
{
  fourthLetter = "J";
}
//prospecting > judging
else if(preferences[7].score > preferences[6].score){
  fourthLetter = "P";
}else {
  fourthLetter = "X";
}
type = firstLetter+secondLetter+thirdLetter+fourthLetter;
document.getElementById('resultsmessage').innerHTML = type;


    if (!type.includes('X')){
      document.getElementById(type).style = "";
    }

    if(type.includes('X')){

     if (firstLetter !== 'E' && secondLetter !== 'N' && thirdLetter !== 'F' && fourthLetter !== 'P'){
      document.getElementById("ISTJ").style = "";
    }

    if (firstLetter !== 'E' && secondLetter !== 'N' && thirdLetter !== 'F' && fourthLetter !== 'J'){
     document.getElementById("ISTP").style = "";
   }

   if (firstLetter !== 'E' && secondLetter !== 'N' && thirdLetter !== 'T' && fourthLetter !== 'P'){
    document.getElementById("ISFJ").style = "";
  }

  if (firstLetter !== 'E' && secondLetter !== 'N' && thirdLetter !== 'T' && fourthLetter !== 'J'){
     document.getElementById("ISFP").style = "";
   }

   if (firstLetter !== 'E' && secondLetter !== 'S' && thirdLetter !== 'T' && fourthLetter !== 'P'){
      document.getElementById("INFJ").style = "";
    }

    if (firstLetter !== 'E' && secondLetter !== 'S' && thirdLetter !== 'T' && fourthLetter !== 'J'){
     document.getElementById("INFP").style = "";
    }

    if (firstLetter !== 'I' && secondLetter !== 'S' && thirdLetter !== 'F' && fourthLetter !== 'P'){
     document.getElementById("ENTJ").style = "";
    }

    if (firstLetter !== 'E' && secondLetter !== 'S' && thirdLetter !== 'F' && fourthLetter !== 'J'){
     document.getElementById("INTP").style = "";
    }

    if (firstLetter !== 'I' && secondLetter !== 'N' && thirdLetter !== 'F' && fourthLetter !== 'J'){
     document.getElementById("ESTP").style = "";
    }

    if (firstLetter !== 'I' && secondLetter !== 'N' && thirdLetter !== 'T' && fourthLetter !== 'J'){
     document.getElementById("ESFP").style = "";
    }

    if (firstLetter !== 'I' && secondLetter !== 'N' && thirdLetter !== 'T' && fourthLetter !== 'P'){
     document.getElementById("ESFJ").style = "";
    }

    if (firstLetter !== 'I' && secondLetter !== 'S' && thirdLetter !== 'T' && fourthLetter !== 'J'){
     document.getElementById("ENFP").style = "";
    }

    if (firstLetter !== 'I' && secondLetter !== 'S' && thirdLetter !== 'T' && fourthLetter !== 'P'){
     document.getElementById("ENFJ").style = "";
    }

    if (firstLetter !== 'I' && secondLetter !== 'S' && thirdLetter !== 'F' && fourthLetter !== 'J'){
     document.getElementById("ENTP").style = "";
    }

    if (firstLetter !== 'E' && secondLetter !== 'S' && thirdLetter !== 'F' && fourthLetter !== 'P'){
     document.getElementById("INTJ").style = "";
    }

    if (firstLetter !== 'I' && secondLetter !== 'N' && thirdLetter !== 'F' && fourthLetter !== 'P'){
     document.getElementById("ESTJ").style = "";
   }

    }
      $('html, body').animate({
        scrollTop: $("#results").offset().top
      }, 800, function(){


        window.location.hash = '#results';

  });
};



/*
var typeArray  = ['ISTJ', 'ISTP', 'ISFJ', 'ISFP', 'INFJ', 'INFP','INTJ', 'INTP, 'ESTP', 'ESTJ', 'ESFP', 'ESFJ', 'ENFJ', 'ENTP', 'ENTJ'];
resultArray [];

if (firstLetter != 'X' && checkAgainstISTJ.includes(firstLetter))
{
typeArray.push
}

*/
