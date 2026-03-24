import './style.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  lightbox,
} from './render-functions';

console.log('JS працює');

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.currentTarget.elements.search.value.trim();

  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.show({
        message: 'No images found',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    lightbox.refresh();
  } catch (error) {
    iziToast.show({
      message: 'Error loading images',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
