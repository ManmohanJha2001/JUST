const messages = [
    "Are you sure?",
    "Really sure??",
    "Please don't say no",
    "Babieee please...",
    "MERA PYARA BETU YESS BOL DO!",
    "BOLO BOLO YESS BOLO BABIEEE...",
    "PIGGY WILL CRY ...",
    "HUM RONE LGENEGE PLEASE BABIEEE...",
    "TIK H JAA RHE HUM RONE...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}