import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import './index.css'
import RootLayout from './pages/layout/rootLayout.jsx'

// Create a client
const queryClient = new QueryClient()

//lazy loading the root component
const Home = lazy(() => import('./pages/home/home'))
const Create = lazy(() => import('./pages/create/create'))
const Post = lazy(() => import('./pages/post/post'))
const Search = lazy(() => import('./pages/search/Search'))
const Auth = lazy(() => import('./pages/auth/auth'))
const Profile = lazy(() => import('./pages/profile/profile'))

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
