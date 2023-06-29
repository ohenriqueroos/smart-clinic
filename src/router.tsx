import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import RootPage from "./pages/RootPage";
import MenusRegister from "./pages/MenusRegister/MenusRegister";
import MenusRegisterForm from "./pages/MenusRegister/MenusRegisterForm/MenusRegisterForm";

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
      {
        path: "/menus-register",
        element: <MenusRegister />,
      },
      {
        path: "/menus-register/new",
        element: <MenusRegisterForm />,
      },
    ],
  },
]);

export default router;
