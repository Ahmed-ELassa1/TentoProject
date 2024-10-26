import { createHashRouter, RouterProvider } from "react-router-dom";
import LayoutOne from "./components/layouts/LayoutOne";
import {
  Home,
  Lock,
  Profile,
  Reset,
  Signin,
  Signup,
  Trade,
  VerifyEmail,
  Wallet,
} from "./pages/index";

function App() {
  const routers = createHashRouter(
    [
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
      { path: "/verify-email", element: <VerifyEmail /> },
      { path: "/reset", element: <Reset /> },
      { path: "/lock", element: <Lock /> },
      {
        path: "/",
        element: <LayoutOne />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/trade",
            element: <Trade />,
          },
          { path: "/wallet", element: <Wallet /> },
          { path: "/settings-profile", element: <Profile /> },
        ],
      },
    ],
    {
      basename: "/",
    }
  );
  return (
    <div className="app">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
