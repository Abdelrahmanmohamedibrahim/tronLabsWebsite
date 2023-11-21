import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import tronLabsLogo from "./assets/tronLabsLogo.png";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
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
