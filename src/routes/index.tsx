import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DetailPoke from "../pages/DetailPoke";
import Homepage from "../pages/App";

import Pokemon from "../pages/Pokemon";
import CatchPoke from "../pages/CatchPoke";

import { ThemeContext } from "../utils/context";
import { useEffect, useMemo, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/detail/:id_pokemon/:name_pokemon",
    element: <DetailPoke />,
  },
  {
    path: "/catch/:name_pokemon",
    element: <CatchPoke />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
]);

const App = () => {
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};
export default App;
