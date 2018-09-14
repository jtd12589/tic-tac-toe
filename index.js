let cells = document.querySelectorAll('.cell');
let currentPlayerSymbol = 'X';
let patterns = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];

cells.forEach(function(cell) {
    cell.addEventListener('click', cellClicked);
});

function cellClicked(e) {
    if (e.target.innerHTML !== '') {
        return;
    }

    e.target.classList += ` ${currentPlayerSymbol}`;
    e.target.innerHTML = `<span class="player-value">${currentPlayerSymbol}</span>`;

    if (isGameOver()) {
        console.log('somebody won');
        return;
    }

    if (currentPlayerSymbol === 'X') {
        currentPlayerSymbol = 'O';
    } else {
        currentPlayerSymbol = 'X';
    }
}

function isGameOver() {
    let patternResults = [];

    patterns.forEach(function(pattern) {
        let cellsInPatternFound = 0;

        pattern.forEach(function(cell) {
            if (cell.classList.contains(currentPlayerSymbol)) {
                cellsInPatternFound++;
            }
        });

        patternResults.push(cellsInPatternFound);
    });

    if (patternResults.includes(3)) {
        return true;
    }

    return false;
}
