
import { galleryItems } from './gallery-items.js';

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`}).join('')
  ;
}
const galleryContainer = document.querySelector (".gallery");
const imagesGallery = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesGallery )

galleryContainer.addEventListener('click', openGalleryEl)

function openGalleryEl (e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG"){
    return
  }
  const newSrc = e.target.dataset.source;
  const bigImg = `<img width="1400" height="900" src="${newSrc}">`;

  const modal = basicLightbox.create(bigImg, { 
    closable: true,
    onShow: () => { window.addEventListener('keydown', pressEscBtn) } ,
    onClose: () => { window.removeEventListener('keydown', pressEscBtn) }
});
  openModal(modal);
    
  function pressEscBtn(event) {
      if (event.code === 'Escape') {
      modal.close();
      };
  }; 
}
function openModal(open) {
  open.show();
}


