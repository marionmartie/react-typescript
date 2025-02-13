import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements( 
      <Route path="/" element={<MainLayout/>} > 
          <Route index element={ <HomePage /> } />
          <Route path='/jobs' element={ <JobsPage /> } />
          <Route path='*' element={ <NotFound /> } />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

