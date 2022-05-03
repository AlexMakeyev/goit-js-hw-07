import { galleryItems } from './gallery-items.js';

const galleryBox = document.querySelector('.gallery');

const createGalleryMarkup = (
    {preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
};

const createGalleryImage = galleryItems.map(createGalleryMarkup).join(" ");

galleryBox.insertAdjacentHTML("beforeend", createGalleryImage);


const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: "250"});


console.log(galleryItems);
