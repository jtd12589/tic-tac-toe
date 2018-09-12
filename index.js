let cells = document.querySelectorAll('.cell');
let currentPlayerSymbol = 'X';
let patterns = [
    ['c1', 'c2', 'c3'],
    ['c4', 'c5', 'c6'],
    ['c7', 'c8', 'c9'],
    ['c1', 'c4', 'c7'],
    ['c2', 'c5', 'c8'],
    ['c3', 'c6', 'c9'],
    ['c1', 'c5', 'c9'],
    ['c3', 'c5', 'c7'],
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

    patterns.forEach(function(winningPattern) {
        let patternCellsFound = 0;

        winningPattern.forEach(function(id) {
            let found = document.querySelector(`#${id}.${currentPlayerSymbol}`);

            if (found !== null) {
                patternCellsFound++;
            }
        });

        patternResults.push(patternCellsFound);
    });

    if (patternResults.includes(3)) {
        return true;
    }

    return false;
}
