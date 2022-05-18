// switching mains

let pilotButton = document.getElementById('pilot_button');
let devButton = document.getElementById('dev_button');
let developer = document.getElementById('developer');
let pilot =  document.getElementById('pilot');


const switchMain = () => {
    developer.style.display = 'block';
    pilot.style.display= 'none';
};

pilotButton.onclick = switchMain;

let switchBack = () => {
    pilot.style.display = 'block';
    developer.style.display = 'none';
};

devButton.onclick = switchBack;