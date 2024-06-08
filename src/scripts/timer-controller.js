function homeTimer(timerEnd) {
    updateTimer(timerEnd);
    setInterval(function () {
        updateTimer(timerEnd);
    }, 1000);
}

function updateTimer(timerEnd) {
    const now = new Date();
    const timeLeft = home-timerEnd - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const daysElement = document.getElementById('timer-days');
    const hoursElement = document.getElementById('timer-hours');
    const minutesElement = document.getElementById('timer-minutes');
    const secondsElement = document.getElementById('timer-seconds');

    if (daysElement) {
        daysElement.innerText = String(days).padStart(2, '0');
    }
    if (hoursElement) {
        hoursElement.innerText = String(hours).padStart(2, '0');
    }
    if (minutesElement) {
        minutesElement.innerText = String(minutes).padStart(2, '0');
    }
    if (secondsElement) {
        secondsElement.innerText = String(seconds).padStart(2, '0');
    }
}