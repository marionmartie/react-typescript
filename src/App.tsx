import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJob from './pages/AddJob';

export default function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements( 
      <Route path="/" element={<MainLayout/>} > 
          <Route index element={ <HomePage /> } />
          <Route path='/jobs' element={ <JobsPage /> } />
          <Route path='/jobs/:id' element={ <JobPage /> } loader={jobLoader} />
          <Route path='/add-job' element={ <AddJob /> } />
          <Route path='*' element={ <NotFound /> } />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

