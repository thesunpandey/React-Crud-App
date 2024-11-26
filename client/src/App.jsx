import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import User from './components/getUser/User';
import Add from './components/addUser/Add';
import Edit from './components/updateUser/Edit';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={route} />
      <Toaster 
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#4CAF50',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#F44336',
              color: 'white',
            },
          },
          // Optional: Default style for all toasts
          style: {
            borderRadius: '10px',
            padding: '16px',
          },
        }}
      />
    </div>
  );
}

export default App;