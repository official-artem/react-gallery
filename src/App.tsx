import './App.css'
import { useEffect } from 'react';
import { getPhotos } from './client/httpClient';
import { useAppDispatch, useAppSelector } from './hooks';
import photos, { init } from './store/photos';

function App() {

  const store = useAppSelector(state => state.photos)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init())

}, [dispatch])

  return (
    <section className='photo__list'>
      <div className="list">
        {store.photos.map(photo => {
          return (
            <div className="photo__card">
              <img onClick={() => { }} className='photo' key={photo.id} src={photo.urls.thumb} alt={photo.description} />
              <h2 className='photo__title'>{photo.alt_description}</h2>
              <span>{photo.user.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default App
