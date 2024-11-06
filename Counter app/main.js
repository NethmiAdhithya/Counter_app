const counter = document.querySelector('.counter');
const buttons = document.querySelectorAll('.button');
const historyLog = document.querySelector('.history');

let count = 0;
let history = [];

counter.innerText = count;

for (let i=0; i < buttons.length; i++){
    const btn = buttons[i];

    btn.addEventListener('click', HandleAction);
}

function HandleAction (evt) {
    const action = evt.target.dataset.action;

    if (action == "increase") {
        // count += 1;
        count++;
    }else if (action == "decrease") {
        // count += 1;
        count--;
    }else if (action == "reset") {
        count = 0;
    }

    counter.innerText = count;

    history.push(count);

    // Display the history
    UpdateHistoryLog();
}

function UpdateHistoryLog() {
    // Clear the previous history display
    historyLog.innerHTML = '';

    // Add each history item to the display
    history.forEach(function(entry, index) {
        const historyItem = document.createElement('div');
        historyItem.innerText = `Action ${index + 1}: ${entry}`;
        historyLog.appendChild(historyItem);
    });
}

// BONUS TASK: Increase by increments of 10!