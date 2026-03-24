import SimpleLightboxModule from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const SimpleLightbox =
  SimpleLightboxModule.default || SimpleLightboxModule;

const gallery = document.querySelector('.gallery');

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
            <div class="info">
              <p class="info-item"><b>Likes</b> ${likes}</p>
              <p class="info-item"><b>Views</b> ${views}</p>
              <p class="info-item"><b>Comments</b> ${comments}</p>
              <p class="info-item"><b>Downloads</b> ${downloads}</p>
            </div>
          </li>
        `;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.add('active');
}

export function hideLoader() {
  document.querySelector('.loader').classList.remove('active');
}