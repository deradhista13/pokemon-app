import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DetailPoke from "../pages/DetailPoke";
import Homepage from "../pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/detail/:id_pokemon/:name_pokemon",
    element: <DetailPoke />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
