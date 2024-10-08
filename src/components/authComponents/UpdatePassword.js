import { useState } from "react";
import SuccessCard from "../commons/SuccessCard";
import ErrorCard from "../commons/ErrorCard";

const UpdatePassword = () => {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();

    console.log("Form Submitted");
  };
  return (
    <form className="mt-11" onSubmit={submitFormHandler}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-6">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Update Password
          </h1>
          <p className="mt-1 text-sm leading-6 text-gray-600 mb-11">
            Enter token and password to update password
          </p>

          {error && <ErrorCard errorMessage={error} />}

          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Verification Token"
              className="form-control"
              onChange={(event) => setToken(event.target.value)}
              value={token}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="password"
              className="form-control"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
            />
          </div>

          <div className="form-group">
            <input
              className="btn btn-secondary form-control"
              type="submit"
              value="Signin"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdatePassword;
