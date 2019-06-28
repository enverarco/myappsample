
document.getElementById("button1").addEventListener("click", ScrolltoQuestion2);
document.getElementById("button2").addEventListener("click", ScrolltoQuestion3);
document.getElementById("button4").addEventListener("click", ScrolltoResults);

function myFunction() {
  alert ("Hello World!");
}

var type = "intp";

var introverted = 0, extraverted = 0, intuitive =0, sensory =0, thinking =0, feeling =0, judging =0, prospecting = 0;

var firstLetter = "", secondLetter = "", thirdLetter = "", fourthLetter = "";


/*
if(document.getElementById('gender_Male').checked) {

}else if(document.getElementById('gender_Female').checked) {

}*/

function ScrolltoQuestion2(){

  $('html, body').animate({
    scrollTop: $("#traits").offset().top
  }, 800, function(){

    window.location.hash = '#traits';
  });
};

function ScrolltoQuestion3(){

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
  introverted = extraverted = sensory = intuitive = feeling = thinking = judging = prospecting = 0;

if(document.getElementById('introverted').checked){
  introverted += 100;
}
if(document.getElementById('extraverted').checked){
  extraverted += 100;
}
if(document.getElementById('sensory').checked){
  sensory += 100;
}
if(document.getElementById('intuitive').checked){
  intuitive += 100;
}
if(document.getElementById('feeling').checked){
  feeling += 100;
}
if(document.getElementById('thinking').checked){
  thinking += 100;
}
if(document.getElementById('judging').checked){
  judging += 100;
}
if(document.getElementById('prospecting').checked){
  prospecting += 100;
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


if(introverted > extraverted)
{
  firstLetter = "I";
}
else if(extraverted > introverted) {
  firstLetter = "E";
}else {
  firstLetter = "X";
}

if(sensory > intuitive)
{
  secondLetter = "S";
}
else if (intuitive > sensory){
  secondLetter = "N";
} else {
  secondLetter = "X";
}

if(feeling > thinking)
{
  thirdLetter = "F";
}
else if (thinking > feeling){
  thirdLetter = "T";
}else {
  thirdLetter = "X";
}

if(judging > prospecting)
{
  fourthLetter = "J";
}
else if(prospecting > judging){
  fourthLetter = "P";
}else {
  fourthLetter = "X";
}
type = firstLetter+secondLetter+thirdLetter+fourthLetter;
document.getElementById('resultsmessage').innerHTML = type;



    if (!type.includes('X')){
      document.getElementById(type).style = "";
    }



      $('html, body').animate({
        scrollTop: $("#results").offset().top
      }, 800, function(){


        window.location.hash = '#results';

    //}

  });
};
