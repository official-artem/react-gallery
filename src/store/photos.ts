import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PhotoResponse } from '../types/photoResponse.type';
import { getPhotos } from '../client/httpClient';

type PhotosState = {
  photos: PhotoResponse[],
  loading: boolean;
  error: string;
}
const initialState: PhotosState = {
  photos: [],
  loading: false,
  error: '',
};

const photosSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    // add: (state, action: PayloadAction<string>) => {
    //   state.photos.push(action.payload);
    // },
    // take: (state, action: PayloadAction<string>) => {
    //   state.photos.filter(good => good !== action.payload);
    // },
    clear: (state) => {
      state.photos = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.photos = action.payload;
      console.log(state.photos)
    })

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Error'
    })
  }
})

// export const { add, take, clear } = goodsSlice.actions;
export default photosSlice.reducer;


export const init = createAsyncThunk('photos/fetch', () => {
  return getPhotos();
})