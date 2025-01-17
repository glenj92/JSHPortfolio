import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { SqlDev } from "./components/SqlDev";
import { Smartflex } from "./components/Smartflex";
import { VSCode } from "./components/VSCode";
import { Php } from "./components/Php";
import { GitHub } from "./components/GitHub";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/sql-dev',
    element: <SqlDev />
  },
  {
    path: '/smartflex',
    element: <Smartflex />
  },
  {
    path: '/vs-code',
    element: <VSCode />
  },
  {
    path: '/php',
    element: <Php />
  },
  {
    path: '/github',
    element: <GitHub />
  }
];

export default AppRoutes;
