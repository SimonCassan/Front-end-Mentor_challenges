async function fetchChallenges() {
    const res = await fetch('data.json');
    return res.json();
}

const main = document.getElementById('main-container');
const challenges = await fetchChallenges();

challenges.forEach(challenge => {
    const card = document.createElement('section');
    const titleCard = document.createElement('h2');
    titleCard.textContent = challenge.name;
    card.appendChild(titleCard);
    main.appendChild(card);
});
