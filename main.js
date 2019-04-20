const btnTime = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;
let active = false;
let idI;

const timer = () => {
    if (!active) {
        active = !active;
        btnTime.textContent = 'Pause';
        idI = setInterval(start, 10);
    } else {
        active = !active;
        btnTime.textContent = 'Start';
        clearInterval(idI);
    }
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}

btnTime.addEventListener('click', timer);