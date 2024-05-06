import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Birds from "./pages/Birds";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/animals",
      element: <Animals />,
    },
    {
      path: "/birds",
      element: <Birds />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
