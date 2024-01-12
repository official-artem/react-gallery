import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks';
import { init } from '../store/photos';
import { Link } from 'react-router-dom';

const ListImages: FC = () => {
  const store = useAppSelector(state => state.photos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch])
  return (
    <div className="list">
      {store.photos.map(photo => {
        return (
          <Link key={photo.id} to={`/${photo.id}`} className="photo__card">
            <img className='photo'  src={photo.urls.thumb} alt={photo.description} />
            <h2 className='photo__title'>{photo.alt_description}</h2>
            <span>{photo.user.name}</span>
          </Link>
        );
      })}
    </div>
  )
}

export default ListImages