import { PhotoResponse } from '../types/photoResponse.type';

const BASE_URL = 'https://api.unsplash.com/photos';
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getPhotos(): Promise<PhotoResponse[]> {
  return fetch(`${BASE_URL}?client_id=${API_KEY}`, {
  })
  .then(photosFromServer => photosFromServer.json())
  .then(photosFromServer => photosFromServer)
}

export async function getPhotoById(id: string): Promise<PhotoResponse> {
  console.log(API_KEY)
  return fetch(`${BASE_URL}/${id}?client_id=${API_KEY}`)
    .then(photosFromServer => photosFromServer.json())
    .then(photosFromServer => photosFromServer);
}