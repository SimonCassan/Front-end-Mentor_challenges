const blocks = document.querySelectorAll('.h2-block');
for (const block of blocks) {
    block.addEventListener('click', () => {
        const img = block.querySelector('img');
        const imgSrcAttribute = img.getAttribute('src').includes('./assets/images/icon-plus.svg') ?
            './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
        img.setAttribute('src', imgSrcAttribute);
        block.closest('section').classList.toggle('expand');
    })
}


