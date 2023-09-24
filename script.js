//your JS code here. If required.
// Find the element with the id "level"
const targetElement = document.getElementById("level");
let domLevel = 0;
let currentNode = targetElement;

while (currentNode.parentNode) {
  domLevel++;
  currentNode = currentNode.parentNode;
}
alert(`The level of the element is: ${domLevel}`);
