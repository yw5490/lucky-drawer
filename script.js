let participants = generateParticipants();
let currentRound = 0;
let isLotteryRunning = false;
let lotteryInterval;

function generateParticipants() {
    let names = ['蔡德鹏', '陈博丽', '陈发捧', '陈涵', '陈虹', '陈建新', '陈鹏斌', '陈文舒', '陈希（英）', '陈希（数）', '陈雪燕', '陈雁峰', '陈韫予', '池少秋', '崔皎皎', '戴文晓', '董雨萱', '高飞飞', '高向武', '郭立梅', '胡玥秀', '胡汉洲', '胡梦梦', '胡忠忠', '胡珂', '黄萍', '黄霞', '贾哲三', '金洁', '金衍洲', '金婷婷', '雷日响', '李林芝', '李思思', '厉莉', '厉丽', '林城妤', '林川', '林窗', '林丹妮', '林冬冬', '林海娟', '林洁如', '林沿锦', '凌瓦', '刘树成', '刘毅', '卢珮', '吕天翔', '马君勇', '倪绍琪', '倪晓燕', '潘大江', '邱若茜', '沈伟伟', '陶谨慎', '汪心怡', '王海燕', '王家跃', '王娜', '王文华', '王璐萍', '翁尘痕', '吴爱盛', '吴芳芳', '吴瑶', '伍合力', '夏疆环', '项林芝', '谢慧', '谢洁琳', '徐传博', '徐静', '许丹尔', '杨佺', '叶陈骞', '叶嘉逸', '叶露', '叶颖', '尤秀女', '张铭洁', '张索环', '张维时', '张晓芙', '张颖', '张永新', '郑洁丹', '郑森', '郑小燕', '郑绣约', '郑怡', '朱巍巍'];
    return names;
}

function startLottery() {
    if (!isLotteryRunning) {
        isLotteryRunning = true;
        lotteryInterval = setInterval(rollParticipants, 75);
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
    const elem = document.getElementById('output');
    elem.innerHTML = '';
    elem.style.fontSize = '100px';
    elem.style.backgroundColor = "#f0ebe5";
    elem.style.textAlign = "center";
    elem.innerText = rollingName;
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
    const elem = document.getElementById('output');
    elem.style.display = 'flex';
    elem.innerHTML = '';
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    row1.classList.add('row');
    row2.classList.add('row');
    elem.appendChild(row1);
    elem.appendChild(row2);

    let row1Num = Math.min(5, selectedNames.length);
    for (let i = 0; i < row1Num; i++)
    {
        const p = document.createElement('p');
        p.textContent = selectedNames[i];
        p.classList.add('name');
        row1.appendChild(p);
    }

    if (selectedNames.length > 5)
    {
        for (let i = 5; i < selectedNames.length; i++)
        {
            const p = document.createElement('p');
            p.textContent = selectedNames[i];
            p.classList.add('name');
            row2.appendChild(p);
        }
    }
}

function resetLottery() {
    participants = generateParticipants();
    currentRound = 0;
    const elem = document.getElementById('output');
    elem.innerText = '';
    elem.style.backgroundColor = "";
}