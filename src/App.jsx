import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
import Cart from './pages/Cart'; // 1. Импортируем корзину

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/shop",
    element: <Home />,
  },
  {
    path: "/cart", // 2. Добавляем новый путь
    element: <Cart />,
  },
], {
  future: {
    v7_startTransition: true,
  },
});

function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}

export default App;