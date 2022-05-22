// switching mains

let pilotButton = document.getElementById('pilot_button');
let devButton = document.getElementById('dev_button');
let developer = document.getElementById('developer');
let pilot =  document.getElementById('pilot');
let pilotNav = document.getElementById('pilot_nav');
let devNav = document.getElementById('dev_nav');


const switchMain = () => {
    developer.style.display = 'block';
    pilot.style.display = 'none';
    devNav.style.display = 'block';
    pilotNav.style.display = 'none';
};

pilotButton.onclick = switchMain;

let switchBack = () => {
    pilot.style.display = 'block';
    developer.style.display = 'none';
    pilotNav.style.display = 'block';
    devNav.style.display = 'none';
};

devButton.onclick = switchBack;