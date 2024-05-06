import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Birds from "./pages/Birds";
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

/*

const router = createBrowserRouter([
      {
      path: "/",
      element: <Home />,
    },
    {
      path: '/',
      element: <Root/>,
      errorELement: <ErrorPage.jsx/>,
      children: [
        {path: ':category', element: <CategoryPage {...zoo} />},
        {path: '/about', element: <Animals {...zoo} />},


      ]
    }
])

*/

/*

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

*/
