ul = document.getElementById('container');

child = ul.children;
console.log(child); // output -- html collections
Array.from(child); //it is convert html collection to array
//parent to child element access
firstElement = ul.firstElementChild
lastElement = ul.lastElementChild
console.log(firstElement);
console.log(lastElement);
//child to parent element access -- access by id
java = document.getElementById('java');
java.parentElement  // access parentelement
java.previousElementSibling // access upper parentelement
csharp = java.nextElementSibling // access lower parent element
csharp.style.color = "#f00";
 