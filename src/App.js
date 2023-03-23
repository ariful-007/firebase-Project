
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Main from './LayOut/Main';
import Login from './Components/Login';
import Registaion from './Components/Registration';
import About from './About'
import Shop from './Shop';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/about',
          element:<About></About>,
        },
        {
          path:'/shop',
          element:<Shop></Shop>,
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/signup', 
          element:<Registaion></Registaion>,
        },
      ]
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
