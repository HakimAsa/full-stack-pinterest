import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import Home from './pages/home/home.jsx'
import Create from './pages/create/create.jsx'
import Post from './pages/post/post.jsx'
import Search from './pages/search/Search.jsx'
import Auth from './pages/auth/auth.jsx'
import Profile from './pages/profile/profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/create"
          element={<Create />}
        />
        <Route
          path="/pin/:id"
          element={<Post />}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
        <Route
          path="/:username"
          element={<Profile />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
