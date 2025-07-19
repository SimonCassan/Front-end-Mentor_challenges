async function getData() {
    const res = await fetch('/challenges/Time-tracking-dashboard/data.json');
    const data = await res.json();
    return data;
}
const data = await getData();

const buildTime = (time, type) => {
    const labelMap = { daily: 'Yesterday', weekly: 'Last Week', monthly: 'Last Month' };
    const formatTime = hour => hour === 0 ? 'None' : `${hour}${hour === 1 ? 'hr' : 'hrs'}`;

    return { currentTime: formatTime(time.current), previousTime: `${labelMap[type]} - ${formatTime(time.previous)}` };
};

const buildTimeCard = (cardData, type) => {
    const timeDiv = document.createElement('div');
    timeDiv.classList.add(`${type}-time`, 'stats-time');
    const timeP = document.createElement('p');
    const timePreviousp = document.createElement('p');
    const timeData = buildTime(cardData.timeframes[type], type);
    timeP.textContent = timeData.currentTime;
    timePreviousp.textContent = timeData.previousTime;
    timeDiv.appendChild(timeP);
    timeDiv.appendChild(timePreviousp);
    return timeDiv;
}

const cardsSection = document.querySelectorAll('.card');
cardsSection.forEach(cardSection => {
    data.forEach(cardData => {
        if (cardSection.classList.contains(cardData.title.toLowerCase())) {
            const cardContent = cardSection.querySelector('.card-content');
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card-time');

            cardDiv.appendChild(buildTimeCard(cardData, 'daily'));
            cardDiv.appendChild(buildTimeCard(cardData, 'weekly'));
            cardDiv.appendChild(buildTimeCard(cardData, 'monthly'));

            cardContent.appendChild(cardDiv);
        }
    });
});

const buttons = document.querySelectorAll('.profile-links button');
const defaultBtn = document.getElementById('daily');
let previousBtn = defaultBtn;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // remove "active" on all stats' div
        document.querySelectorAll('.stats-time')
            .forEach(div => div.classList.remove('active'));
        // add "active" on the corrects one
        document.querySelectorAll(`.${button.id}-time`)
            .forEach(div => div.classList.add('active'));
        // remove "pressed" on previous active button
        previousBtn.classList.remove('pressed');
        button.classList.add('pressed');
        previousBtn = button;
    });
});
// activate default behavior (daily stats)
defaultBtn.click();
defaultBtn.focus();