function setup(){

}
function show(){
  document.getElementById('title').style.visibility="visible";
  document.getElementById('date').style.visibility="visible";
  document.getElementById('pic').style.visibility="visible";
  document.getElementById('explanation').style.visibility="visible";
  document.getElementByid('astrobuttons').style.visibility="hidden";
}
function show2(){
  document.getElementById('numbuttons').style.visibility="visible";
  document.getElementById('innumber').style.visibility="visible";
  document.getElementById('EnterNumber').style.visibility="visible";
}

function getRandomFact(){
const n = document.querySelector("#innumber").value;
  $.get(`http://numbersapi.com/${n}`, function(data) {
    $('#number').text(data);
    console.log($('#number').text(data));
  });
}

const element =  document.querySelector('.body-content');
element.classList.add('animated', 'bounceIn');
const element1= document.querySelector('.title')
element.classList.add('animated','bounceInUp');

function hide(){
  const element3 = document.querySelector('.butt')
  element3.classList.add('animated','bounceOut')
}

document.querySelector("#innumber").addEventListener("keydown", myNewFunction);
function myNewFunction(event) {
  if(event.keyCode===13){
    getRandomFact()
  }
}

var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "WQ1XdtcCDqBPONZmIB4mwzUUvHZFu7ll0mvfDueV";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})

// function scroll(){
// document.querySelector('.title').scrollIntoView({
//   behavior: 'smooth'
// });
// }
