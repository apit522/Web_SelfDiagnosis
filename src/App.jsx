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
import "./assets/style/App.css";
import Loading from "./Loading";
import DetailArtikel from "./page/DetailArtikel";

function App() {
  const [loading, setLoading] = useState(true);

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
      path: "/register",
      element: <SignUp />
    },
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/navbar",
      element: <Navbar />
    },
    {
      path: "/artikel",
      element: <Artikel />
    },
    {
      path: "/detail-artikel",
      element: <DetailArtikel />
    },
    {
      path: "/home",
      element: <Home setLoading={setLoading} />
    },
    {
      path: "/chat",
      element: <Chat setLoading={setLoading} />
    },
    {
      path: "/module",
      element: <Module setLoading={setLoading} />
    },
    {
      path: "/contact",
      element: <Contact setLoading={setLoading} />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
