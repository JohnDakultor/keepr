import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './pages/Create'
import Note from './pages/Note'

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Create />} />
          <Route path="/note" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
