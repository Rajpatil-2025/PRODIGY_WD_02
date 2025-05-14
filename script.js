let timer;
let milliseconds = 0;
let isRunning = false;

function formatTime(ms) {
    const hrs = String(Math.floor(ms / 3600000)).padStart(2, '0');
    const mins = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
    const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    const millis = String(ms % 1000).padStart(3, '0');
    return `${hrs}:${mins}:${secs}.${millis}`;
}

function updateDisplay() {
    document.getElementById('display').textContent = formatTime(milliseconds);
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds += 10;
            updateDisplay();
        }, 10);
    }
}

function stopStopwatch() {
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    stopStopwatch();
    milliseconds = 0;
    updateDisplay();
}
