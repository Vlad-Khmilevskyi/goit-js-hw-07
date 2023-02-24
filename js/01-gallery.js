import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup);
gallery.addEventListener('click', createCardsClick)

function createCardsMarkup(elements) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
        })
        .join('');
}

const instance = basicLightbox.create(
    `<img width="1280" height="auto" src="">`,
    {
    onShow: () => {
        window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: () => {
        window.removeEventListener('keydown', onEscKeyPress);
    },
    }
);

function createCardsClick(evt) {
    evt.preventDefault();

    const isGalleryImage = evt.target.dataset.source;
    if (!isGalleryImage) return;

    instance.element().querySelector('img').src = isGalleryImage;    
    instance.show();
}

function onEscKeyPress(e) {
    if (e.code === 'Escape') {
        instance.close();
        console.log(e.code);
    };
}