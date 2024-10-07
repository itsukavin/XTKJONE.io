                                        function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (!isValidInput(name1) || !isValidInput(name2)) {
        showNotification('names must be between 2/20 characters');
        return;
    }

    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        const lovePercentage = Math.floor(Math.random() * 101);
        document.getElementById('loading').style.display = 'none';
        drawResult(name1, name2, lovePercentage);
    }, 2000);
}

function isValidInput(name) {
    return name.length >= 2 && name.length <= 20;
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const messageSpan = document.getElementById('notificationMessage');
    messageSpan.textContent = message;
    
    notification.style.display = 'flex';
    setTimeout(() => { closeNotification(); }, 10000);
}

function closeNotification() {
    document.getElementById('notification').style.display = 'none';
}

function drawResult(name1, name2, percentage) {
    const canvas = document.getElementById('resultCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 400;
    canvas.height = 200;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ffafbd');
    gradient.addColorStop(1, '#ffc3a0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff';
    ctx.font = '26px Montserrat';
    ctx.textAlign = 'center';
    ctx.fillText(`${name1} ❤️ ${name2}`, canvas.width / 2, 80);
    ctx.fillText(`Love Percentage: ${percentage}%`, canvas.width / 2, 130);

    document.getElementById('resultWrapper').style.display = 'block';
}

function saveImage() {
    const canvas = document.getElementById('resultCanvas');
    const link = document.createElement('a');
    link.download = 'love.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
 
            