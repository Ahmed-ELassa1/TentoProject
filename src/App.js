import { Route, Routes } from "react-router-dom";
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
  return (
    <div className="app">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/lock" element={<Lock />} />
        <Route path="/" element={<LayoutOne />}>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/settings-profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
