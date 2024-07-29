import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CountryDetail from './components/CountryDetail'
import CountryList from './components/CountryList'

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<CountryList />} />
          <Route path='/country/:name' element={<CountryDetail />} />
        </Routes>
      </div>
    </>
  )
}

export default App
