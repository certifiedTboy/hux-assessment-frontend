const ErrorCard = ({ errorMessage }) => {
  return (
    <div className="alert alert-danger mt-5" role="alert">
      {errorMessage}
    </div>
  );
};

export default ErrorCard;
