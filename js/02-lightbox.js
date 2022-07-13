// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const galleryEl = document.querySelector('.gallery');

// const galleryItemsEl = createGallery(galleryItems);
// galleryEl.addEventListener('click', galleryEventEl);

// galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);
// function createGallery(el) {
//     return el.map(({ preview, original, description }) => {
//         return `
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// `
//     }).join("");
// }
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGallery(img) {
  return img
    .map(({ original, preview, description }) => {
      return `
        <a
        class="gallery__item"
        href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}" />
        </a>
    `;
    })
    .join("");
};
  
new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: 'alt',
    captionDelay: 500,
});
