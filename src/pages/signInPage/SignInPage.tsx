import FormWrapper from "../../components/formWrapper/FromWrapper";
import InputField from "../../components/inputField/InputField";
import AuthButton from "../../components/authButton/AuthButton";
import Logo from "../../components/logo/Logo";
import { useState } from "react";


const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Sign In:", formData);
  };

  return (
    <FormWrapper title={<Logo />}>
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => handleChange(e)}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => handleChange(e)}
      />
      <AuthButton label="Sign In" onClick={handleSubmit} />
    </FormWrapper>
  );
};

export default SignIn;