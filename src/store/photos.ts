import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PhotoResponse } from '../types/photoResponse.type';
import { getPhotos } from '../client/httpClient';

type PhotosState = {
  photos: PhotoResponse[],
  loading: boolean;
  error: string;
  fullPhoto: PhotoResponse | null
}
const initialState: PhotosState = {
  photos: [],
  loading: false,
  error: '',
  fullPhoto: null
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    getFullPhoto (state, action) {
      state.fullPhoto = state.photos.find(photo => photo.id === action.payload) || null;
    },
    clearFullPhoto(state) {
      state.fullPhoto = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.loading = false;
    })

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Error'
    })
  }
})

// export const { add, take, clear } = goodsSlice.actions;
export default photosSlice.reducer;

export const { getFullPhoto, clearFullPhoto } = photosSlice.actions;
export const init = createAsyncThunk('photos/fetch', () => {
  return getPhotos();
})
