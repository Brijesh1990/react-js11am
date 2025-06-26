// create a function for clear all values
function clrMain() {
  document.getElementById('result').value = '';
}

// create a function for backspace removed values
function backSpace() {
  var spc = document.getElementById('result').value;
  var res = spc.slice(0, -1);
  document.getElementById('result').value = res;
}

// create a function for input data in result
function InputData(val) {
  document.getElementById('result').value += val;
}

// create a function for evaluate all airthmatic concepts
function finalResult() {
  var x = document.getElementById('result').value;
  var res = eval(x);
  document.getElementById('result').value = res;
}

// create a function for square

function sq() {
  var number = document.getElementById('result').value;
  var res = Math.pow(number, 2);
  document.getElementById('result').value = res;
}

// create a function for squareRoot

function sqRoot() {
  var number = document.getElementById('result').value;
  var res = Math.sqrt(number);
  document.getElementById('result').value = res;
}
