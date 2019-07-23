
/*document.getElementById("button1").addEventListener("click", ScrolltoQuestion2);
document.getElementById("button2").addEventListener("click", ScrolltoQuestion3);
document.getElementById("button4").addEventListener("click", ScrolltoResults);*/

//let colorRed:

/*var colors = ["red", "blue", "green"];
    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    }*/

let sectionId1 = "section1"
let sectionId2 = "traits"
let sectionId3 = "career"
let sectionId4 = "results"
let button1 = "button1";
let button2 = "button2";
let button4 = "button4";
var type = "";
var introverted = 0, extraverted = 0, intuitive =0, sensory =0, thinking =0, feeling =0, judging =0, prospecting = 0;
var firstLetter = "", secondLetter = "", thirdLetter = "", fourthLetter = "";

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

function ButtonAppear(buttonId){
  document.getElementById(buttonId).style.visibility = "visible";
}

document.getElementById("button1").addEventListener("click", function(){ HideShow(sectionId1, sectionId2); });
document.getElementById("button2").addEventListener("click", function(){ HideShow(sectionId2, sectionId3); });
document.getElementById("button4").addEventListener("click", function(){ HideShow(sectionId3, sectionId4); ScrolltoResults()});

function HideShow(sectiontoHide,sectiontoReveal){
  document.getElementById(sectiontoHide).style.display = "none";
  document.getElementById(sectiontoReveal).style.display = "block";
}

function redirecttoTwitterShare(){
    window.location.href="http://twitter.com/share?text=I found out my personality type was " + type + " Find out your type at personalityhero.com " + "&url=https://personalityhero.com&hashtags=personalityhero,whatsyourpersonality,quiz";
}

function redirecttoFacebookShare(){
/*  document.getElementById("descriptionmetatag").setAttribute("og:description", "I found out my personality type is " + type + " click here to discover your personality type"); */
  window.location.href= "https://www.facebook.com/sharer/sharer.php?u=http://personalityhero.com/index.html";
}

function redirecttoLinkedinShare(){
  window.location.href= "https://www.linkedin.com/shareArticle?mini=true&url=http://personalityhero.com&title=Personality%20Hero%20Test&summary=My%20favorite%20developer%20program&source=LinkedIn";
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

function ScrolltoResults(){
  var q5class = document.getElementsByClassName('result');

  for(var i = 0; i < q5class.length; i = i + 1) {
    q5class[i].style.display='block';
  }

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
    if(document.getElementById(preferences[i].name).checked){
      preferences[i].score += 100;
    }
  }

  if(document.getElementById('developer').checked){
    preferences[0].score += 30;
    preferences[5].score += 30;
  }
  if(document.getElementById('teacher').checked){
    preferences[4].score += 30;
  }
  if(document.getElementById('entertainer').checked){
    preferences[3].score += 30;
  }
  if(document.getElementById('artist').checked){
    preferences[4].score += 30;
    preferences[7].score += 30;
  }
  if(document.getElementById('police/military').checked){
    preferences[6].score += 30;
  }
  if(document.getElementById('musician').checked){
    preferences[4].score += 30;
    preferences[7].score += 30;
  }
  if(document.getElementById('engineer').checked){
    preferences[3].score += 30;
    preferences[6].score += 30;
  }
  if(document.getElementById('realestateagent').checked){
    preferences[1].score += 30;
  }

  traitsArray = ['shy','outgoing','forgetful','active','emotional','rational','organised','messy'];

  for (var i = 0; i < traitsArray.length; i++) {
    if(document.getElementById(traitsArray[i]).checked)
    {
      preferences[i].score += 40;
    }
  }
  //introverted > extraverted
  if(preferences[0].score > preferences[1].score){
    firstLetter = "I";
  }
  //extraverted > inroverted
  else if(preferences[1].score > preferences[0].score) {
    firstLetter = "E";
  }else {
    firstLetter = "X";
  }
  //sensory > intuitive
  if(preferences[3].score > preferences[2].score){
    secondLetter = "S";
  }
  //intuitive > sensory
  else if (preferences[2].score > preferences[3].score){
    secondLetter = "N";
  } else {
    secondLetter = "X";
  }
  //feeling > thinking
  if(preferences[4].score > preferences[5].score){
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
  //document.getElementById('resultsmessage').innerHTML = type;

  if (!type.includes('X')){
    document.getElementById(type).style.display='block'
    document.getElementById('resultsmessage').innerHTML = "Your Result is";
  }
  if(type.includes('X')){
    document.getElementById('resultsmessage').innerHTML = "Your Result could be one of the below";
    var typeResults = ['ISTJ', 'ISTP', 'ISFJ', 'ISFP', 'INFJ', 'INFP','INTJ', 'INTP', 'ESTP', 'ESTJ', 'ESFP', 'ESFJ', 'ENFJ', 'ENTP', 'ENTJ', 'ENFP'];
    for (var i = 0; i < typeResults.length; i++) {
      if((typeResults[i].charAt(0) == firstLetter || firstLetter == 'X') && (typeResults[i].charAt(1) == secondLetter || secondLetter == 'X')&& (typeResults[i].charAt(2) == thirdLetter || thirdLetter == 'X')&& (typeResults[i].charAt(3) == fourthLetter || fourthLetter == 'X'))
      {
        document.getElementById(typeResults[i]).style.display='block';
      }
    }
  }


  $('html, body').animate({
    scrollTop: $("#results").offset().top
  }, 800, function(){
    window.location.hash = '#results';
  });
};

/*
parameter ? routing // parameters

when i load a page, check for a parameter like that,
set the metatags for that parameters

if








   */
