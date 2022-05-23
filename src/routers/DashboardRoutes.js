import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DcScreen } from '../components/DC/DcScreen'
import { HeroScreen } from '../components/hero/HeroScreen'
import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <>
       <Navbar />
       <div className='container'>
        <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="search" element={<SearchScreen />} />
              <Route path="hero/:heroeId" element={<HeroScreen />} />
              <Route path="/" element={<MarvelScreen />} />
        </Routes>
       </div>
    </>
  )
}