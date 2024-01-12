import { FC, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import './Photo.css';
import { getFullPhoto, clearFullPhoto } from '../store/photos';

const Photo: FC = () => {
  const { photoId = '' } = useParams();
  const { fullPhoto } = useAppSelector(state => state.photos)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFullPhoto(photoId))
  }, [photoId])

  return (
    <>
      {fullPhoto 
      ? (
          <Link onClick={() => { dispatch(clearFullPhoto())}} to="/">
            <img className='full_photo' src={fullPhoto?.urls.full} />
          </Link>
      )
      : (
        <div className="loader">Smt went wrong</div>
      )
    }
    </>
  )
}

export default Photo