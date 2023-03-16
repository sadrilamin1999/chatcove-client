import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useLogin } from "../hooks/useLogin";
import ErrorMessage from "../components/ErrorMessage";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault(formFields.email, formFields.password);

    await login();
  };
  return (
    <div className="login flex justify-center mt-20">
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <SectionTitle title={"Login..."} />

        <FormControl
          label="email"
          labelInner="Email Address"
          inputType="email"
          placeholder="Write your email"
          formFields={formFields}
          setFormFeilds={setFormFields}
        />
        <FormControl
          label="password"
          labelInner="Password"
          inputType="password"
          placeholder="Write your password"
          formFields={formFields}
          setFormFeilds={setFormFields}
        />
        <Button text={isLoading ? "Logging..." : "Login"} submit />

        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Login);
