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
  el.preventDefault();
  const targetEl = el.target;

  if (targetEl.nodeName !== "IMG") {
    return
  }
  let imgPickerEl = el.target.dataset.source;

const instance = basicLightbox.create(`
    <img src="${imgPickerEl}" width="800" height="600">
`)

  instance.show()
  
  galleryEl.addEventListener("keydown", el => {
    el.preventDefault();
    if (el.code === 'Escape') {
      instance.close();
    }
  })
};
