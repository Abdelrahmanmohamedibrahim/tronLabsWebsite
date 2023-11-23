import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Projects from "./pages/Projects";
import Contactus from "./pages/Contactus";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/tronLabs/",
        element: <Home />,
      },
      {
        path: "/tronLabs/about",
        element: <About />,
      },
      {
        path: "/tronLabs/login",
        element: <Login />,
      },
      {
        path: "/tronLabs/signup",
        element: <Signup />,
      },
      {
        path: "/tronLabs/projects",
        element: <Projects />,
      },
      {
        path: "/tronLabs/contactus",
        element: <Contactus />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
