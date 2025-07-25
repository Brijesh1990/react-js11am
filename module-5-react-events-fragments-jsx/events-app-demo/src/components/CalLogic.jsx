import React from 'react';
function add() {
  const a = parseInt(prompt('Enter a values :'));
  const b = parseInt(prompt('Enter b values :'));
  const c = a + b;
  alert('Additions of Numbers is :' + c);
}
function subs() {
  const a = parseInt(prompt('Enter a values :'));
  const b = parseInt(prompt('Enter b values :'));
  const c = a - b;
  alert('substractions of Numbers is :' + c);
}

function mult() {
  const a = parseInt(prompt('Enter a values :'));
  const b = parseInt(prompt('Enter b values :'));
  const c = a * b;
  alert('Multiplications of Numbers is :' + c);
}
function dv() {
  const a = parseInt(prompt('Enter a values :'));
  const b = parseInt(prompt('Enter b values :'));
  const c = a / b;
  alert('Divisions of Numbers is :' + c);
}

function md() {
  const a = parseInt(prompt('Enter a values :'));
  const b = parseInt(prompt('Enter b values :'));
  const c = a % b;
  alert('Modulas of Numbers is :' + c);
}

export { add, subs, mult, dv, md };
