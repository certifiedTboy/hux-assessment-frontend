import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ContactsPage from "../pages/ContactsPage";
import Error404Page from "../pages/Error404Page";
import Signup from "../components/authComponents/Signup";
import Signin from "../components/authComponents/Signin";
import ResetPassword from "../components/authComponents/ResetPassword";
import VerifyAccount from "../components/authComponents/VerifyAccount";
import UpdatePassword from "../components/authComponents/UpdatePassword";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  const { user } = useSelector((state) => state.userState);
  return (
    <Routes>
      <Route path="*" element={<Error404Page />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/get-started" element={<AuthPage />}>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="password/reset" element={<ResetPassword />} />
        <Route path="account/verify" element={<VerifyAccount />} />
        <Route path="password/reset/update" element={<UpdatePassword />} />
      </Route>

      <Route
        path="/contacts"
        element={
          <ProtectedRoutes user={user}>
            <ContactsPage />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
