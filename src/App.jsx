import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  {/* const App = () => {
  const name = 'John';
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Jacob'];
  const loggedIn = true;
  const styles = {
    color: 'red',
    fontSize: '55px',
  }

  return (
    <>
      <div classNameName="text-5xl">App</div>
      <p style={styles}>Hello {name}</p>
      <p>The sum of {x} and {y} is {x+y}</p>
      <ul>
        {names.map((name, index)=> (
          <li key={index}>{name}</li>     
        ))}
        {loggedIn && <h1>Hello Member</h1>}
      </ul>
    </>
  )
} 
//rafce
export default App */}
//add new job
  const addJob = async (newJob) => {

    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //delete job
  const deleteJob = async (id) => {

    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;

  };

  //update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>)
  );

  return <RouterProvider router={router} />
};

export default App;