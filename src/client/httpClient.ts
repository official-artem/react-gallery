import { PhotoResponse } from '../types/photoResponse.type';

const BASE_URL = 'https://api.unsplash.com/photos';

export async function getPhotos(): Promise<PhotoResponse[]> {
  return fetch(`${BASE_URL}?client_id=${API_KEY}`, {
    headers: {
      'page': '3',
      'per_page': '20',
      'X-Ratelimit-Limit': '20'
    }
  })
  .then(photosFromServer => photosFromServer.json())
  .then(photosFromServer => photosFromServer)
}