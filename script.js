const words = [
    'Hello',
    'Japan',
    'China'
]

// ---------- SUBMITTING A GUESS ----------
let userGuess = [];

// KEYBOARD/MOUSE FUNCTIONALITY
document.addEventListener('keydown', keyPressed);
document.addEventListener('click', mouseClicked);

// Press Key ⬜️
function keyPressed(e) {
    // Learn more about radio expressions
    if (e.key.match(/[a-z]/)) {
        console.log(`Letter ${e.key} pressed`);
        userGuess.push(e.key);
        console.log(userGuess);
    }
    if (e.key === 'Enter') {
        console.log('Enter pressed');
    }
    if (e.key === 'Backspace') {
        console.log('Delete pressed');
    }
}

// Click Mouse 🖱
function mouseClicked(e) {
    if (e.target.matches('[data-key]')) {
        console.log(`Letter ${e.target.textContent} pressed`);
        userGuess.push(e.target.textContent);
        console.log(userGuess);
    }
    if (e.target.matches('[data-enter]')) {
        console.log('Enter pressed');
    }
    if (e.target.matches('[data-delete')) {
        console.log('Delete pressed');
    }
}
