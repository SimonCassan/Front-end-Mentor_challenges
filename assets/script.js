const difficultyMap = {
    1: { label: 'Newbie', class: 'difficulty-veryeasy' },
    2: { label: 'Junior', class: 'difficulty-easy' },
    3: { label: 'Intermediate', class: 'difficulty-medium' },
    4: { label: 'Advanced', class: 'difficulty-hard' },
    5: { label: 'Guru', class: 'difficulty-expert' },
    default: { label: 'Void', class: 'difficulty-unknown' }
};
const BASE_URL = 'https://simoncassan.github.io/Front-end-Mentor_challenges';

async function fetchChallenges() {
    const res = await fetch('data.json');
    return res.json();
}

const main = document.getElementById('main-container');
const challenges = await fetchChallenges();

// construction des cartes
challenges.forEach(challenge => {
    const card = document.createElement('div');
    card.classList.add('card');
    const link = document.createElement('a');
    link.classList.add('card_link');
    link.setAttribute('href', `${BASE_URL}${challenge.url}`);
    link.setAttribute('aria-label', `${challenge.name} preview on GitHub Pages`);
    link.setAttribute('target', '_blank');
    const titleCard = document.createElement('h2');
    const img = document.createElement('img');
    img.setAttribute("src", `.${challenge.url}screenshot.jpg`);
    img.setAttribute("alt", `${challenge.name} picture preview`);
    titleCard.textContent = challenge.name;
    const list = document.createElement('ul');
    list.classList.add('card-tags');
    challenge.categories.forEach(categorie => {
        const categorieElt = document.createElement('li');
        categorieElt.classList.add('card-tag');
        categorieElt.textContent = categorie.toUpperCase();
        if (categorie === 'html')
            categorieElt.classList.add('html-style');
        else if (categorie === 'css')
            categorieElt.classList.add('css-style');
        else
            categorieElt.classList.add('js-style');
        list.appendChild(categorieElt);
    })
    const difficulty = document.createElement('div');
    const difficultyLabel = document.createElement('span');
    const difficultyIndex = document.createElement('span');
    difficultyIndex.classList.add('difficulty-number')
    difficultyIndex.textContent = challenge.difficulty;
    const { label, class: difficultyClass } = difficultyMap[difficultyIndex.textContent] || difficultyMap.default;
    difficultyLabel.textContent = label;
    difficultyLabel.classList.add('difficulty-text')
    difficulty.classList.add('difficulty', difficultyClass);

    difficulty.appendChild(difficultyIndex);
    difficulty.appendChild(difficultyLabel);

    const divInfo = document.createElement('div');
    divInfo.classList.add('info');
    link.appendChild(img);
    link.appendChild(titleCard);
    divInfo.appendChild(list);
    divInfo.appendChild(difficulty);
    link.appendChild(divInfo);
    card.appendChild(link);
    main.appendChild(card);
});