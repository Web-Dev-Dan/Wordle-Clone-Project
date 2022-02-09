const words = [
    'Hello',
    'Japan',
    'China'
]

// ---------- SUBMITTING A GUESS ----------
document.addEventListener('keydown', keyPressed);
document.addEventListener('click', mouseClicked);

// Press Key ⬜️
function keyPressed(e) {
    if (e.key.match(/[a-z]/)) {
        console.log(`Letter ${e.key} pressed`)
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
    }
    if (e.target.matches('[data-enter]')) {
        console.log('Enter pressed');
    }
    if (e.target.matches('[data-delete')) {
        // Check bug when clicking the SVG icon
        console.log('Delete pressed');
    }
}
