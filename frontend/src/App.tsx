import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Warlock from './pages/Units/Warlock'
import Farseer from './pages/Units/Farseer'
import Guardian_Defender from './pages/Units/Guardian_Defender'
import Dire_Avenger from './pages/Units/Dire_Avenger'
import Header from './components/Header'

const App = () => {
  return (
    <div className='bg-gray-600 text-white h-screen w-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/units/warlock' element={<Warlock />} />
        <Route path='/units/farseer' element={<Farseer />} />     
        <Route path='/units/guardian_defender' element={<Guardian_Defender />} />     
        <Route path='/units/dire_avenger' element={<Dire_Avenger />} />
      </Routes>
      



    </div>
  )
}

export default App