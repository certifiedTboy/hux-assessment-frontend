import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoginUserMutation } from "../../lib/apis/authApis";
import ErrorCard from "../commons/ErrorCard";
import SuccessCard from "../commons/SuccessCard";
import classes from "./Auth.module.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // select request success message from redux
  const { message } = useSelector((state) => state.requestMessageState);

  // initialize login rtk hook
  const [loginUser, { isSuccess, error, isError, data }] =
    useLoginUserMutation();

  const navigate = useNavigate();

  // submit form handler to login user
  const submitFormHandler = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    await loginUser({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/contacts");
    }
  }, [isSuccess]);

  return (
    <form className="mt-11" onSubmit={submitFormHandler}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-6">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Get Started
          </h1>
          <p className="mt-1 text-sm leading-6 text-gray-600 mb-11">
            Sign in here to get started
          </p>

          {error && (
            <ErrorCard errorMessage={error.error || "something went wrong"} />
          )}

          {message && <SuccessCard successMessage={message} />}

          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>

          <div className="form-group">
            <input
              className="btn btn-secondary form-control"
              type="submit"
              value="Signin"
            />
          </div>

          <div className={classes.form_links}>
            <p>
              Don't have an account?{" "}
              <Link to="/get-started/signup">Signup</Link>
            </p>

            <p>
              Forgot Password ?{" "}
              <Link to="/get-started/reset-password">Reset Password</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signin;
