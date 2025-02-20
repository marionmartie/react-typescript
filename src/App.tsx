import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJob from './pages/AddJob';
import { Job } from './types.ts'


export default function App() {

  const addJob = async (newJob: Job) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })

    return
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements( 
      <Route path="/" element={<MainLayout/>} > 
          <Route index element={ <HomePage /> } />
          <Route path='/jobs' element={ <JobsPage /> } />
          <Route path='/jobs/:id' element={ <JobPage /> } loader={jobLoader} />
          <Route path='/add-job' element={ <AddJob addJobSubmit={addJob} /> } />
          <Route path='*' element={ <NotFound /> } />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

