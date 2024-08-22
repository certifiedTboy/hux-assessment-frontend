import { useEffect, useState } from "react";

const useFormValidation = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formError, setFormError] = useState({ type: "", error: "" });

  const checkIfFormIsValid = () => {
    // check if all input fields are provided
    if (firstName.trim() === "") {
      setFormError({ type: "firstName", error: "First name field is empty" });
      return setFormIsValid(false);
    }
    if (lastName.trim() === "") {
      setFormError({ type: "lastName", error: "Last name field is empty" });
      return setFormIsValid(false);
    }
    if (email.trim() === "") {
      setFormError({ type: "email", error: "Email field is empty" });
      return setFormIsValid(false);
    }
    if (password.trim() === "") {
      setFormError({ type: "password", error: "Password field is empty" });
      return setFormIsValid(false);
    }
    if (confirmPassword.trim() === "") {
      setFormError({
        type: "confirmPassword",
        error: "Confirm password field is empty",
      });
      return setFormIsValid(false);
    }

    // email regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // check if email is valid
    if (!emailRegex.test(email)) {
      setFormError({ type: "email", error: "Invalid email address" });
      return setFormIsValid(false);
    }

    // check password length
    if (password.length < 8) {
      setFormError({
        type: "password",
        error: "Password must not be less than 8 characters",
      });
      return setFormIsValid(false);
    }

    const validPassword = {
      hasUpper: /[A-Z]/,
      hasLower: /[a-z]/,
      hasNumber: /[0-9]/,
      hasSpclChr: /[@,#,$,%,&]/,
    };

    // check if password has uppercase, lowercase, number and special character
    if (!validPassword.hasUpper.test(password)) {
      setFormError({
        type: "password",
        error: "Password must contain uppercase letter",
      });
      return setFormIsValid(false);
    }

    if (!validPassword.hasLower.test(password)) {
      setFormError({
        type: "password",
        error: "Password must contain lowercase letter",
      });
      return setFormIsValid(false);
    }

    if (!validPassword.hasNumber.test(password)) {
      setFormError({
        type: "password",
        error: "Password must contain a number",
      });
      return setFormIsValid(false);
    }

    if (!validPassword.hasSpclChr.test(password)) {
      setFormError({
        type: "password",
        error: "Password must contain a special character",
      });
      return setFormIsValid(false);
    }
    // check if password is equals confirm password
    if (password !== confirmPassword) {
      setFormError({
        type: "confirmPassword",
        error: "Password does not match",
      });
      return setFormIsValid(false);
    }
    setFormError({ type: "", error: "" });
    return setFormIsValid(true);
  };

  // use effect hook
  useEffect(() => {
    const timer = setTimeout(() => {
      checkIfFormIsValid();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [firstName, lastName, email, password, confirmPassword]);
  return { formIsValid, formError };
};

export default useFormValidation;
