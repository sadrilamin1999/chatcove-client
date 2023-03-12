const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className=" bg-violet-600 text-white py-3 rounded-md mt-3 hover:bg-violet-800 duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
