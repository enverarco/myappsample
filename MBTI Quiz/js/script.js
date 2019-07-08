
document.getElementById("button1").addEventListener("click", ScrolltoQuestion2);
document.getElementById("button2").addEventListener("click", ScrolltoQuestion3);
document.getElementById("button4").addEventListener("click", ScrolltoResults);
document.getElementById("button5").addEventListener("click", ScrolltoTop);


//loop for adding event listeners to question 1 radio buttons
var inputs = document.getElementsByClassName("preference"),
    x=inputs.length;
while(x--)
    inputs[x].addEventListener("click", Button1Appear);

//loop for adding event listeners to question 2 radio buttons
var inputs = document.getElementsByClassName("traits"),
    x=inputs.length;
while(x--)
    inputs[x].addEventListener("click", Button2Appear);

//loop for adding event listeners to final question radio buttons
var inputs=document.querySelectorAll("input[name = career]"),
    x=inputs.length;
while(x--)
    inputs[x].addEventListener("click", ResultsButtonAppear);



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

function Button1Appear(){

document.getElementById("button1").style.visibility = "visible";

}

function Button2Appear(){

document.getElementById("button2").style.visibility = "visible";

}

function ResultsButtonAppear(){

document.getElementById("button4").style.visibility = "visible";
}


function ScrolltoQuestion2(){


  //check if question 1 option is selected

  if(document.getElementById('introverted').checked || document.getElementById('extraverted').checked || document.getElementById('intuitive').checked || document.getElementById('sensory').checked || document.getElementById('feeling').checked || document.getElementById('thinking').checked || document.getElementById('prospecting').checked || document.getElementById('judging').checked)
  {



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
} else {
  //  document.getElementById('alert1').style = "";
  document.getElementById("alert1").style.visibility = "visible";
  };

}



function ScrolltoQuestion3(){

  if(document.getElementById('outgoing').checked || document.getElementById('shy').checked || document.getElementById('active').checked || document.getElementById('forgetful').checked || document.getElementById('rational').checked || document.getElementById('emotional').checked || document.getElementById('messy').checked || document.getElementById('organised').checked)
  {

  var q3class = document.getElementsByClassName('question3');

  for(var i = 0; i < q3class.length; i = i + 1) {
      q3class[i].style.display='block';
  }

  $('html, body').animate({
    scrollTop: $("#career").offset().top
  }, 800, function(){


    window.location.hash = '#career';
  });
}else {
    //document.getElementById('alert2').style = "";
    document.getElementById("alert2").style.visibility = "visible";
  };

}

function ScrolltoQuestion4(){

  if(document.getElementById('developer').checked || document.getElementById('teacher').checked || document.getElementById('entertainer').checked || document.getElementById('artist').checked || document.getElementById('police/military').checked || document.getElementById('musician').checked || document.getElementById('enginerr').checked || document.getElementById('realestateagent').checked)
  {

  $('html, body').animate({
    scrollTop: $("#functions").offset().top
  }, 800, function(){


    window.location.hash = '#functions';
  });
}else {
    document.getElementById('alert3').style = "";
  };
}

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


      var pos = type.indexOf("X");
      var indexes = [];




    function createVariables(){


      while(pos > -1) {
    //  indexes[pos] = pos;


      console.log("The X is located at index " + pos);
    //  console.log("First index logged is " + indexes[pos]);
      pos = type.indexOf("X", pos+1);
      indexes.push[pos];




    }

      return indexes;
    }


    if (type.indexOf("X")){

    }

    // if index is at 2 and 3 then run this

    // if index is at 1

    // if index is at 2

    // if index is at 3

    // if index is at 4

    // if index is at 2 and 4

    if(type.includes('X')){
      // if type inclues X
      //console.log("The X is located at index " + type.indexOf('X'));

      createVariables();
      console.log("this is the index outside the loop" + indexes[0]);

      //var checkAgainstISTJ = document.getElementById("ISTJ").innerHTML;
    /*  var checkAgainstISTJ = document.getElementById("ISTJ").childNodes[1].innerHTML;
      var checkAgainstISTP = document.getElementById("ISTP").childNodes[1].innerHTML;
      var checkAgainstISFJ = document.getElementById("ISFJ").childNodes[1].innerHTML;
      var checkAgainstISFP = document.getElementById("ISFP").childNodes[1].innerHTML;
      var checkAgainstINFJ = document.getElementById("INFJ").childNodes[1].innerHTML;
      var checkAgainstINFP = document.getElementById("INFP").childNodes[1].innerHTML;
      var checkAgainstENTJ = document.getElementById("ENTJ").childNodes[1].innerHTML;
      var checkAgainstINTP = document.getElementById("INTP").childNodes[1].innerHTML;
      var checkAgainstESTP = document.getElementById("ESTP").childNodes[1].innerHTML;
      var checkAgainstESFP = document.getElementById("ESFP").childNodes[1].innerHTML;
      var checkAgainstESFJ = document.getElementById("ESFJ").childNodes[1].innerHTML;
      var checkAgainstENFP = document.getElementById("ENFP").childNodes[1].innerHTML;
      var checkAgainstENFJ = document.getElementById("ENFJ").childNodes[1].innerHTML;
      var checkAgainstENTP = document.getElementById("ENTP").childNodes[1].innerHTML;
      var checkAgainstINTJ = document.getElementById("INTJ").childNodes[1].innerHTML;
      var checkAgainstESTJ = document.getElementById("ESTJ").childNodes[1].innerHTML;

      //get rid of all the X's from type
      var noXtype = type.replace('X', '');
      var noXtype = noXtype.replace('X', '');
      var noXtype = noXtype.replace('X', '');*/


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

    //}

  });
};



/*
var typeArray  = ['ISTJ', 'ISTP', 'ISFJ', 'ISFP', 'INFJ', 'INFP','INTJ', 'INTP, 'ESTP', 'ESTJ', 'ESFP', 'ESFJ', 'ENFJ', 'ENTP', 'ENTJ'];
resultArray [];

if (firstLetter != 'X' && checkAgainstISTJ.includes(firstLetter))
{
typeArray.push
}


var n = typeArray.includes(firstLetter);




*/


//filter it by each section
//for each space of the letters// break that into an array
//letter a b c and // DEBUG:
// for that first space filter out half og the results that dont have that letters
// filter out all the ones that dont have e
//does this contain this letter
//array of results (16 different results) and each point your checking those resultsmessage
// and then shorting that array
// then push up and pop

//comparision of a string
//comparison of a letter at each point
//you know where the letters go




//sort against the properties
