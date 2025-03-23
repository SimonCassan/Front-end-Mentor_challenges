const shareCard = document.getElementById('share-card');
const shareButtons = document.getElementsByClassName('share-button');

window.addEventListener('click', e => {
    if (!shareCard.contains(e.target))
        shareCard.classList.remove('active');
})

for (const button of shareButtons) {
    button.addEventListener('click', e => {
        e.stopPropagation();
        shareCard.classList.toggle('active');
    })
}