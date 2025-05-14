let startTime, interval;
let running = false;
let elapsed = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function updateDisplay(time) {
  const milliseconds = String(time % 1000).padStart(3, '0');
  const totalSeconds = Math.floor(time / 1000);
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const minutes = String(Math.floor(totalSeconds / 60) % 60).padStart(2, '0');
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function start() {
  if (running) return;
  running = true;
  startTime = Date.now() - elapsed;
  interval = setInterval(() => {
    elapsed = Date.now() - startTime;
    updateDisplay(elapsed);
  }, 10);
}

function pause() {
  if (!running) return;
  running = false;
  clearInterval(interval);
}

function reset() {
  running = false;
  clearInterval(interval);
  elapsed = 0;
  updateDisplay(0);
  laps.innerHTML = '';
}

function lap() {
  if (!running) return;
  const li = document.createElement("li");
  li.textContent = display.textContent;
  laps.appendChild(li);
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
