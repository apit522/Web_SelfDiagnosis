import './App.css';
import Login from "./login/login";
import Signup from './signup/signup';
import Navbar from './navbar/navbar';
import Home from './home/home';
import Chat from './chat/chat';
import Module from './module/module'
import Profil from './profil/profil'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Login />,
    },
    {
      path:"/signup",
      element: <Signup />,
    },
    {
      path:"/navbar",
      element: <Navbar />,
    },
    {
      path:"/home",
      element: <Home />,
    },
    {
      path:"/chat",
      element: <Chat />,
    },
    {
      path:"/module",
      element: <Module />,
    },
    {
      path:"/profil",
      element: <Profil />,
    },
  ]);
  return <div className='App'>
    <RouterProvider router={router}></RouterProvider>
  </div>
    
}

export default App;
