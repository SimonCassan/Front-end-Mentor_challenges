const blocks = document.querySelectorAll('.h2-block');
for (const block of blocks) {
    block.addEventListener('click', () => {
        const img = block.querySelector('img');
        const imgSrcAttribute = img.getAttribute('src').includes('./assets/img/icon-plus.svg') ?
            './assets/img/icon-minus.svg' : './assets/img/icon-plus.svg';
        img.setAttribute('src', imgSrcAttribute);
        block.closest('section').classList.toggle('expand');
    })
}


