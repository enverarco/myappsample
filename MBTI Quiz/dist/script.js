
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').removeClass('transparent');
  } else {
    $('nav').addClass('transparent');
  }
});

let button1 = "button1";
let button2 = "button2";
let button4 = "button4";
var type = "";
var stringType = "";
var introverted =0, extraverted =0, intuitive =0, sensory =0, thinking =0, feeling =0, judging =0, prospecting =0;
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
//var inputs=document.querySelectorAll("input[name = career]"),
var inputs = document.getElementsByClassName("careers"),
x=inputs.length;
while(x--)
inputs[x].addEventListener("click", function(){ ButtonAppear(button4); });

function ButtonAppear(buttonId){
  document.getElementById(buttonId).style.visibility = "visible";
}

function ButtonAction(sectionid){
  if(sectionid == '1'){
    HideShow("section1", "traits");
  }
  else if(sectionid == '2'){
    HideShow("traits", "career");
  }
  else {
    HideShow("career", "results");
    CalculateResults();
  }
}

function HideShow(sectiontoHide,sectiontoReveal){
  document.getElementById(sectiontoHide).style.display = "none";
  document.getElementById(sectiontoReveal).style.display = "block";
}

function redirecttoShare(platform){
  if(platform == 'facebook'){
    window.location.href= "https://www.facebook.com/sharer/sharer.php?u=http://personalityhero.com/index.html";
  }
  else if(platform == 'twitter'){
    window.location.href="http://twitter.com/share?text=I found out my personality type " + stringType + ". Find out your type at personalityhero.com " + "&url=https://personalityhero.com&hashtags=personalityhero,whatsyourpersonality,quiz";
  }
  else if(platform == 'linkedin'){
    window.location.href= "https://www.linkedin.com/shareArticle?mini=true&url=http://personalityhero.com&title=Personality%20Hero%20Test&summary=My%20favorite%20developer%20program&source=LinkedIn";
  }
}

function CalculateResults(){
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

  switch(type) {
    case "ISTJ":
      stringType = "is \"The Duty Fulfiller\"";
      break;
    case "ISTP":
      stringType = "is \"The Mechanic\"";
      break;
    case "ISFJ":
      stringType = "is \"The Nurturer\"";
      break;
    case "ISFP":
      stringType = "is \"The Artist\"";
      break;
    case "INFJ":
      stringType = "is \"The Protector\"";
      break;
    case "INFP":
      stringType = "is \"The Idealist\"";
      break;
    case "INTJ":
      stringType = "is \"The Scientist\"";
      break;
    case "INTP":
      stringType = "is \"The Thinker\"";
      break;
    case "ESTP":
      stringType = "is \"The Doer\"";
      break;
    case "ESTJ":
      stringType = "is \"The Guardian\"";
      break;
    case "ESFP":
      stringType = "is \"The Performer\"";
      break;
    case "ESFJ":
      stringType = "is \"The Caregiver\"";
      break;
    case "ENFP":
      stringType = "is \"The Inspirer\"";
      break;
    case "ENFJ":
      stringType = "is \"The Giver\"";
      break;
    case "ENTP":
      stringType = "is \"The Visionary\"";
      break;
    case "ENTJ":
      stringType = "is \"The Artist\"";
      break;
    default:
      stringType = "";
  }

  if (!type.includes('X')){
    document.getElementById(type).style.display='block'
    document.getElementById('resultsmessage').innerHTML = "Your Result is";
    document.getElementById(type).classList.add("offset-3");
    document.getElementById(type).parentNode.classList.remove("sibling-fade");
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
};
