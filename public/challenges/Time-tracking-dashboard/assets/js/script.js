async function getData() {
    const res = await fetch('../../data.json');
    const data = await res.json();
    return data;
}
const data = await getData();

const buildTime = (time, type) => {
    const labelMap = {
        daily: 'Yesterday',
        weekly: 'Last Week',
        monthly: 'Last Month'
    };
    const formatTime = hour => hour === 0 ? 'None' : `${hour}${hour === 1 ? 'hr' : 'hrs'}`;

    return {
        currentTime: formatTime(time.current), previousTime: `${labelMap[type]} - ${formatTime(time.previous)}`
    };
};

const cardsSection = document.querySelectorAll('.card');
cardsSection.forEach(cardSection => {
    data.forEach(cardData => {
        if (cardSection.classList.contains(cardData.title.toLowerCase())) {
            const cardContent = cardSection.querySelector('.card-content');
            const div = document.createElement('div');
            div.classList.add('card-time');
            const p = document.createElement('p');
            const previousp = document.createElement('p');
            const time = buildTime(cardData.timeframes.daily, 'daily');
            p.textContent = time.currentTime;
            previousp.textContent = time.previousTime;
            div.appendChild(p);
            div.appendChild(previousp);
            cardContent.appendChild(div);
        }
    });
});