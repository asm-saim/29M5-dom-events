//Option 2
function blue() {
    document.body.style.backgroundColor = 'blue';
}

// for click-id
const clickValue3 = document.getElementById('click-id');
clickValue3.onclick = function click3() {
    document.body.style.backgroundColor = 'lightBlue';
}

// for make-purple, sight different form upper one.
const makePurple = document.getElementById('make-purple');
makePurple.onclick = purple;
function purple() {
    document.body.style.backgroundColor = 'purple';
}