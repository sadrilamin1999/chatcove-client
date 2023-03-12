import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register flex justify-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register..."} />
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name" className=" cursor-pointer">
            Name
          </label>
          <input
            type="text"
            placeholder="Write your name"
            id="name"
            value={formFields.name}
            onChange={(e) =>
              setFormFields({ ...formFields, name: e.target.value })
            }
            className="border px-5 py-3 w-[25rem] outline-none rounded-md focus:border-violet-600 duration-300"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
