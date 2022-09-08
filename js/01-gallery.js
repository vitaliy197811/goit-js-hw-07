import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', createItems(galleryItems));

function createItems (item) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-sourse="${original}" alt="${description}">
        </a>
        </div>`;
    })
    .join('');
}

gallery.addEventListener('click', clickImageGallery);

function clickImageGallery(e) {
    e.preventDefault();
    
    const sourse = e.target.dataset.sourse;
    if (!sourse) return;
    const instance = basicLightbox.create(`<img src=${sourse} width="800" height="600">`)
    instance.show()
    
    gallery.addEventListener('keydown', closeImage);

    function closeImage(e) {
        if (e.key === 'Escape') {
            instance.close()
        }
    }
}