import React, { useState, useEffect } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home";
import Chat from "./components/Chat/chat";
import Module from "./module/module";
import Contact from "./page/Contact";
import Artikel from "./page/Artikel";
import Profile from "./page/Profile";
import "./assets/style/App.css";
import Loading from "./Loading";
import DetailArtikel from "./page/DetailArtikel";
import EditArticlePage from './page/EditArticlePage';
import Dashboard from "./page/Dashboard";

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token')); // Check if token exists in localStorage

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);


    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: loading ? <Loading /> : <Navigate to="/home" /> // Gunakan Loading component
    },
    {
      path: "/signin",
      element: isLoggedIn ? <Navigate to="/home" /> : <SignIn setIsLoggedIn={setIsLoggedIn} />
    },
    {
      path: "/signup",
      element: isLoggedIn ? <Navigate to="/home" /> : <SignUp setIsLoggedIn={setIsLoggedIn} />
    },
    {
      path: "/navbar",
      element: <Navbar isLoggedIn={isLoggedIn} /> // Pass isLoggedIn state to Navbar
    },
    {
      path: "/artikel",
      element: <Artikel />
    },
    {
      path: "/artikel/:id",
      element: <DetailArtikel />
    },
    {
      path: "/edit-articles",
      element: <EditArticlePage />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/home",
      element: <Home setLoading={setLoading} />
    },
    {
      path: "/chat",
      element: isLoggedIn ? <Chat setLoading={setLoading} /> : <Navigate to="/signin" />
    },
    {
      path: "/module",
      element: <Module setLoading={setLoading} />
    },
    {
      path: "/contact",
      element: <Contact setLoading={setLoading} />
    },
    {
      path: "/profile",
      element: isLoggedIn ? <Profile /> : <Navigate to="/signin" />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
