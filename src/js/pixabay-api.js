import axios from 'axios';

const API_KEY = '55156718-30f13429680eabebebef71539';

export async function getImagesByQuery(query) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}