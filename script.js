// DIGITAL CLOCK
function updateClock() {
    let now = new Date();

    let h = String(now.getHours()).padStart(2, '0');
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("clock").innerHTML = `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock();


// COUNTDOWN TIMER
function updateCountdown() {
    let now = new Date();
    let newYear = new Date("January 1, 2026 00:00:00");

    let diff = newYear - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "Happy New Year!";
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} Days : ${hours} Hours : ${mins} Minutes : ${secs} Seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
