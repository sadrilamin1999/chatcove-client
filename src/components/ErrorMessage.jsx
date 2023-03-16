const ErrorMessage = ({ error }) => {
  return (
    <p
      className="text-rose-600 bg-rose-50 rounded-md border border-rose-600 py-3 px-2
"
    >
      {error}
    </p>
  );
};

export default ErrorMessage;
