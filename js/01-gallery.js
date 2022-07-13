import { galleryItems } from './gallery-items.js';
 // Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsEl = createGallery(galleryItems);
galleryEl.addEventListener('click', galleryEventEl);

galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);
function createGallery(el) {
    return el.map(({ preview, original, description }) => {
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
</div>
`
    }).join("");
}

function galleryEventEl(el) {
  el.prevent
};