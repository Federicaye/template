import { colors } from './data.js'

let container = document.querySelector('.container');
let displayColor = document.querySelector('.display-color');
let active = null;

for (let i = 0; i < colors.length; i++) {
    let circle = document.createElement('div');
    container.appendChild(circle);
    circle.classList.add('circle');
    circle.setAttribute('id', `${i}`);
    console.log(colors[i]);
    circle.setAttribute("style", `background-color: ${colors[i].valore}`)
    circle.addEventListener('click', function (i) {
        active = i;
        displayColor.setAttribute("style", `background-color: ${colors[circle.id].valore}`)
    })
}
