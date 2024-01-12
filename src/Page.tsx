import { FC } from 'react'
import { Route, Routes } from 'react-router-dom';

const Page: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/1' element={<h1>10</h1>} />
        <Route path='/2' element={<h1>20</h1>} />
      </Routes>
    </>
  )
}

export default Page