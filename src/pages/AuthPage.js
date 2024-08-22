import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userState);

  useEffect(() => {
    if (user) {
      navigate("/contacts");
    }
  }, [user]);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          {" "}
          <Outlet />
        </div>
        <div className="col-md-3"></div>
      </div>
    </section>
  );
};

export default AuthPage;
