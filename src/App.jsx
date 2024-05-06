import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Root from "./pages/Root";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ErrorPage from "./pages/ErrorPage";
import { animals, birds, insects } from "./animalsList";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Root />,
      errorELement: <ErrorPage />,
      children: [
        { path: ":category", element: <CategoryPage {...zoo} /> },
        /*         { path: "/about", element: <About {...zoo} /> },
         */
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
