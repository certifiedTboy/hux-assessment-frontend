import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ErrorCard from "../commons/ErrorCard";
import SuccessCard from "../commons/SuccessCard";
import { useVerifyUserMutation } from "../../lib/apis/userApis";
import { setMessage } from "../../lib/redux/requestMessageSlice";

const VerifyAccount = () => {
  const [token, setToken] = useState("");

  // select message from requestMessageState
  const { message } = useSelector((state) => state.requestMessageState);

  // initialize verify user api hook
  const [verifyUser, { isSuccess, error }] = useVerifyUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitFormHandler = async (event) => {
    event.preventDefault();
    if (!token) {
      return;
    }

    await verifyUser({ token });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setMessage(
          "Account verified successfully, login with your valid credentials"
        )
      );
      navigate("/get-started/signin");
    }
  }, [isSuccess]);

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
            <ErrorCard
              errorMessage={error?.data?.error || "something went wrong"}
            />
          )}

          {message && <SuccessCard successMessage={message} />}

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
