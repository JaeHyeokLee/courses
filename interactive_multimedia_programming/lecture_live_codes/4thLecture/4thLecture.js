
function save()
{
  var inputElement = getInputElement();
  var userString = inputElement.value;

  localStorage.setItem("userText" , userString);
}

var jsArray = ["Ulla Taalasmaa", "Ismo Laitela", "Seppo Taalasmaa"];


function getInputElement()
{
  return document.getElementById("inputText");
}

function getRandomNumber(max)
{
  return Math.floor(Math.random() * max);
}

function startTheShow()
{
  window.setInterval(drawSomething, 300);
}

var drawCounter = 0;

function drawSomething()
{
  var canvas = document.getElementById("drawCanvas");
  var drawingContext = canvas.getContext("2d");
  if (drawCounter < 100)
  {
    drawCounter++;
    var x = getRandomNumber(200);
    var y = getRandomNumber(200);
    var size = getRandomNumber(60);

    drawingContext.rect(x,y,size,size);
    drawingContext.stroke();
  }
  else {
    drawCounter = 0;
    drawingContext.beginPath();
    drawingContext.clearRect(0,0, canvas.width, canvas.height);
  }
}

function load()
{
  var inputElement = getInputElement();
  inputElement.value = localStorage.getItem("userText");
}

Storage.prototype.setObject = function(key, value)
{
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key)
{
  var value = this.getItem(key);
  return JSON.parse(value);
}
