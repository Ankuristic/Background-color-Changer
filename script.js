const change = document.getElementById('button')
const color = doument.getElementById('color')
const body = document.body;

change.addEventListener('click',changebg)

function changebg(){
    const col1= bgColor();
    const col2= bgColor();

    const col3= bgColor();

  body.style.background =colorString;
  color.innerText = colorString

    const colorString =`rgb{$(col1}, ${col2},${col3}`;
    console.log(colorString)
}

function bgColor(){
    return Math.floor(Math.random()*256);
}