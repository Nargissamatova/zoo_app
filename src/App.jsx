import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { animals, birds, insects, fishes } from "./animalsList";

import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import CategoryPage from "./pages/CategoryPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });
  const likesHandler = (name, category, action) => {
    console.log(name, category, action, "was clicked");
  };

  const removeHandler = (name, category) => {
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].filter((el) => el.name !== name),
    }));
  };

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
        {
          path: ":category",
          element: (
            <CategoryPage
              addLikes={likesHandler}
              removeLikes={likesHandler}
              removeCard={removeHandler}
              {...zoo}
            />
          ),
        },
        { path: "/about", element: <About {...zoo} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
