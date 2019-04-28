'use strict';

let pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.children);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

let pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);