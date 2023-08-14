var COLOR = '#000000'
var SIZE = 16
squaresContainer = document.querySelector('.squaresContainer')
rangeContainer = document.querySelector('.rangeValues')
colorPicker = document.querySelector('.colorPicker')
val = document.querySelector('.pixelDeterminer')
paintButton = document.querySelector('.paint')
rainbowButton = document.querySelector('.rainbowPainting')
eraserButton = document.querySelector('.eraser')
clearButton = document.querySelector('.clearBoard')
resetButton = document.querySelector('.resetButton')
btns = document.querySelectorAll('button')
updateSquares()



function changeSize(newSize){
  SIZE = newSize
  updateSquares();
}

function changeColor(newColor){
  COLOR = newColor
  btns.forEach(btn => {
    btn.classList.remove('active')
  })
  console.log(COLOR)
}

function updateSquares(){

  rangeContainer.innerHTML = SIZE +'X' +SIZE
  while (squaresContainer.firstChild) {
    squaresContainer.removeChild(squaresContainer.firstChild);
  }

  squaresContainer.style.gridTemplateColumns = 'repeat('+ SIZE+', auto)'
  for (let i = 0; i < SIZE * SIZE; i++) {
      let square = document.createElement('div')
      square.classList.add('square')
      squaresContainer.appendChild(square)
  }
}

function fillColor(){
  squares = document.querySelectorAll('.square')
  squares.forEach(square=> {
    square.addEventListener('mouseover', () => {  
      square.style.backgroundColor = COLOR
    })
  });
}

function randomfill(){
  squares = document.querySelectorAll('.square')
  squares.forEach(square=> {
    square.addEventListener('mouseover', () => {  
      COLOR = '#'+Math.floor(Math.random()*16777215).toString(16);
      square.style.backgroundColor = COLOR
    })
  });
}

function styleButton(index){
  btns.forEach(btn => {
    btn.classList.remove('active')
  })
  btns[index].classList.add('active')
}

val.onchange = (e) => {
  changeSize(e.target.value)
}

colorPicker.onchange = (e) => {
  changeColor(e.target.value)
}


paintButton.onclick = () => {
  styleButton(0)
  // changeColor(colorPicker.target.value)
  fillColor();
}


rainbowButton.onclick = () => {
  styleButton(1)
  randomfill();
}

eraserButton.onclick = () => {
  styleButton(2)
  squares = document.querySelectorAll('.square')
  squares.forEach(square=> {
    square.addEventListener('mouseover', () => {  
      square.style.backgroundColor = '#FFFFFF'
    })
  });
}

clearButton.onclick = () => {
  styleButton(3)
  changeColor('#ffffff')
  updateSquares();
}

resetButton.onclick=()=>{
  location.reload();
}



