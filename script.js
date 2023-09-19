/* 5-dan 10mde tvla yovel 1 wamshi da stop
function printNumbers(from, to) {
  let current = from;
  let timerId = setInterval(() => {
    console.log(current);
 if (current === to) {
  clearInterval(timerId);
 }
 current++

  }, 1000);
}

printNumbers(5, 10);
===================================================
*/

// document.body.style.backgroundColor = "white";

/* background feris cvla yovel 2.5 wamshi */
 let currentIndex = 0;
const colors = ["black", "white"];
setInterval(changeBackgroundColor, 2500, colors);

function changeBackgroundColor(colors) {
  document.body.style.backgroundColor = colors[currentIndex];

  currentIndex++;

  if (currentIndex === colors.length) {
    currentIndex = 0;
  }
}



function appendUserText() {

  let userInput = document.getElementById("usertext-input").value;

  let existingContent = document.getElementById("usertext").innerHTML;

   existingContent += userInput + "<br>";

   document.getElementById("usertext").innerHTML = existingContent;
  
   document.getElementById("usertext-input").value = ""; 
}





