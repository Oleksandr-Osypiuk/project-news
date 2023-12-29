// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

let galleryRender = "";

galleryItems.map(({ preview, original, description}) => { 
    const render = `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  
    galleryRender += render;
})

gallery.innerHTML = galleryRender;

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});