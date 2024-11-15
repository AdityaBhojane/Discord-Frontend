import React, { useState } from "react";
import FormWrapper from "../../components/formWrapper/FromWrapper";
import InputField from "../../components/inputField/InputField";
import AuthButton from "../../components/authButton/AuthButton";
import Logo from "../../components/logo/Logo";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Sign Up:", formData);
  };

  return (
    <FormWrapper title={<Logo />}>
      <InputField
        label="Username"
        type="text"
        placeholder="Enter your username"
        value={formData.username}
        onChange={(e) => handleChange({ ...e, target: { ...e.target, name: "username" } })}
      />
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => handleChange({ ...e, target: { ...e.target, name: "email" } })}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => handleChange({ ...e, target: { ...e.target, name: "password" } })}
      />
      <AuthButton label="Sign Up" onClick={handleSubmit} />
    </FormWrapper>
  );
};

export default SignUp;