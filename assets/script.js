async function fetchChallenges() {
    const res = await fetch('data.json');
    return res.json();
}

const main = document.getElementById('main-container');
const challenges = await fetchChallenges();

challenges.forEach(challenge => {
    const card = document.createElement('section');
    const titleCard = document.createElement('h2');
    const img = document.createElement('img');
    img.setAttribute("src", `.${challenge.url}screenshot.jpg`);
    img.setAttribute("alt", `${challenge.name} picture preview`);
    titleCard.textContent = challenge.name;
    card.appendChild(img);
    card.appendChild(titleCard);
    main.appendChild(card);
});
