let participants = generateParticipants();
let currentRound = 0;
let isLotteryRunning = false;
let lotteryInterval;

function generateParticipants() {
    let names = [];
    for (let i = 1; i <= 105; i++) {
        names.push(`Name${i}`);
    }
    return names;
}

function startLottery() {
    if (!isLotteryRunning) {
        isLotteryRunning = true;
        lotteryInterval = setInterval(rollParticipants, 50);
    }
}

function pauseLottery() {
    clearInterval(lotteryInterval);
    isLotteryRunning = false;
    displayResults();
}

function rollParticipants() {
    let randomIndex = Math.floor(Math.random() * participants.length);
    let rollingName = participants[randomIndex];
    document.getElementById('output').innerText = rollingName;
}

function displayResults() {
    let selectedNames = [];
    let namesToDisplay = Math.min(10, participants.length);

    for (let i = 0; i < namesToDisplay; i++) {
        let randomIndex = Math.floor(Math.random() * participants.length);
        let selectedName = participants.splice(randomIndex, 1)[0];
        selectedNames.push(selectedName);
    }

    currentRound++;
    document.getElementById('output').innerHTML = `<h2>第${currentRound}轮抽奖结果：</h2>`;
    selectedNames.forEach(name => {
        document.getElementById('output').innerHTML += `<p>${name}</p>`;
    });
}

function resetLottery() {
    participants = generateParticipants();
    currentRound = 0;
    document.getElementById('output').innerText = '';
}