import { Route, Routes } from 'react-router-dom';
import './App.css'
import ListImages from './ListImages/ListImages';
import Photo from './Photo/Photo';

function App() {


return (
  <section className='photo__list'>
    <Routes>
      <Route path='/' element={<ListImages />} />
      <Route path='/:photoId' element={<Photo />} />
    </Routes>
    
  </section>
)
}

export default App
