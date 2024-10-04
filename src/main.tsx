import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage.tsx'
import Brew from './components/About/brew.tsx'
import NotFound from './components/NotFound/NotFound.tsx'
import TechC from './components/About/tech-c.tsx'
import AboutCopy from './components/About/about-copy.tsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <MainPage />,
    errorElement: <NotFound />
  },
  {
    path: '/brew',
    element: <Brew />
  },
  {
    path: '/tech-c',
    element: <TechC />
  },
  {
    path: '/about',
    element: <AboutCopy />
  }
]);
createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
