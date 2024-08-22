import { useState } from "react";

const VerifyAccount = () => {
  const [token, setToken] = useState("");
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
            Verify Account
          </h1>
          <p className="mt-1 text-sm leading-6 text-gray-600 mb-11">
            Verify account here with you token
          </p>

          {error && (
            <div className="alert alert-danger mt-5" role="alert">
              {error}
            </div>
          )}

          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Verification Token"
              className="form-control"
              onChange={(event) => setToken(event.target.value)}
              value={token}
            />
          </div>

          <div className="form-group">
            <input
              className="btn btn-secondary form-control"
              type="submit"
              value="Verify"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default VerifyAccount;
