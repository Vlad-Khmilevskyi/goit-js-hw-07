import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(elements) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        </li>`;
        })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionDelay: 250
});

// var lightbox =     captionPosition: 'bottom',