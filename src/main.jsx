import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import './index.css'
import Home from './pages/home/home.jsx'
import Create from './pages/create/create.jsx'
import Post from './pages/post/post.jsx'
import Search from './pages/search/Search.jsx'
import Auth from './pages/auth/auth.jsx'
import Profile from './pages/profile/profile.jsx'
import RootLayout from './pages/layout/rootLayout.jsx'

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* // Provide the client to your App */}
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/create"
              element={<Create />}
            />
            <Route
              path="/pin/:pinId"
              element={<Post />}
            />

            <Route
              path="/search"
              element={<Search />}
            />
            <Route
              path="/:username"
              element={<Profile />}
            />
          </Route>
          <Route
            path="/auth"
            element={<Auth />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
