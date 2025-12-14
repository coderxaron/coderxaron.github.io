function updateTime() {
    const options = {
        timeZone: 'Europe/Berlin', 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const now = new Date();
    document.getElementById('time').textContent = now.toLocaleTimeString('en-US', options);
}

setInterval(updateTime, 1000);
updateTime();