import React from "react";

const Button = ({ text, submit, logout, handleLogout }) => {
  return (
    <button
      onClick={handleLogout ? handleLogout : null}
      type={submit ? "submit" : ""}
      className={`text-white py-3 rounded-md duration-300 px-5 ${
        logout
          ? "bg-rose-600 hover:bg-rose-800"
          : "bg-violet-600 hover:bg-violet-800 mt-5"
      }`}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
