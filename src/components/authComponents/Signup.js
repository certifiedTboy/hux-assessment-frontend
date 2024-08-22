import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation } from "../../lib/apis/userApis";
import useFormValidation from "../../hooks/userFormValidation";
import { setMessage } from "../../lib/redux/requestMessageSlice";
import ErrorCard from "../commons/ErrorCard";
import classes from "./Auth.module.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // initialize api hook
  const [
    registerUser,
    { isLoading, error: requestError, isError, data, isSuccess },
  ] = useRegisterUserMutation();

  // initialize form validation hook
  const { formIsValid, formError } = useFormValidation(
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  );

  // destructure error and type from formError
  const { type, error } = formError;

  // form submit handler
  const submitFormHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    // call register user function and pass user data as payload
    return await registerUser({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setMessage(`A mail has been sent to ${data?.user?.email}`));
      navigate("/get-started/account/verify");
    }
  }, [data, isSuccess]);
  return (
    <form className="mt-11" onSubmit={submitFormHandler}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-6">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Get Started
          </h1>
          <p className="mt-1 text-sm leading-6 text-gray-600 mb-11">
            Sign up here to get started
          </p>

          {error && (
            <ErrorCard
              errorMessage={
                requestError?.data?.error || error || "something went wrong"
              }
            />
          )}

          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="First Name"
              className={`form-control ${
                type === "firstName" && classes.input_error_border
              }`}
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Last Name"
              className={`form-control ${
                type === "lastName" && classes.input_error_border
              }`}
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Email"
              className={`form-control ${
                type === "email" && classes.input_error_border
              }`}
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Password"
              className={`form-control ${
                type === "password" && classes.input_error_border
              }`}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Confirm Password"
              className={`form-control ${
                type === "confirmPassword" && classes.input_error_border
              }`}
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
            />
          </div>

          <div className="form-group">
            <input
              className={`btn btn-secondary form-control ${
                !formIsValid && "disabled"
              }`}
              type="submit"
              value={isLoading ? "Please wait..." : "Signup"}
            />
          </div>

          <div className={classes.form_links}>
            <p>
              Already have an account?{" "}
              <Link to="/get-started/signin">Signin</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
