import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import RootPage from "./pages/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: "/teste",
        element: <WelcomePage />,
      },
    ],
  },
]);

export default router;
