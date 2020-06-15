var screen = document.getElementById('screen')
console.log(screen);

function handleButtonPress(value) {
  if (value === "=") {
    screen.innerHTML = eval(screen.innerHTML)
  } else if (value === "AC") {
    screen.innerHTML = "";
  }
  else if (value === "C") {
    var removeLast = screen.innerHTML.slice(0, screen.innerHTML.length -1)
    screen.innerHTML = removeLast
  }
   else {
    screen.innerHTML += value;
  }
}
