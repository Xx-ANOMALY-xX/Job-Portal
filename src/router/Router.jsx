import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import CreateJob from '../pages/CreateJob';
import MyJobs from '../pages/MyJobs';
import SalaryPage from '../pages/SalaryPage';
import UpdateJob from '../pages/UpdateJob';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/post-job', element: <CreateJob /> },
      { path: '/my-job', element: <MyJobs /> },
      { path: '/salary', element: <SalaryPage /> },
      { path: '/edit-job/:id', element: <UpdateJob />, loader: ({params}) => fetch()  },
    ],
  },
]);

export default router;