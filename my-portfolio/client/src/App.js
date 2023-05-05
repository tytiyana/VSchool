import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

export default function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience/>} />
        <Route path="projects" element={<Projects/>} />
      </Routes>
    </div>
  )
}
