import { useState } from "react";
import Button from "../components/Button";
import FormBox from "../components/FormBox";
import InputBar from "../components/InputBar";
import TextGradient from "../components/TextGradient";
import authApi from "../apis/auth";
import { AxiosError } from "axios";
import validateRegister from "../validators/validator-register";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialInputError = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      console.log(input);
      e.preventDefault();
      const error = validateRegister(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInput });
      console.log(input);
      await authApi.register(input);
      alert(`Register successfully, please log in to continue`);
      navigate("/login");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        if (error.response.data.field === "email")
          setInputError((prev) => ({
            ...prev,
            email: "email already in use",
          }));
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <FormBox>
        <TextGradient>SIGN UP</TextGradient>
        <hr />
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col items-center justify-center"
          action=""
        >
          <InputBar
            type="text"
            placeholder="First name"
            value={input.firstName}
            name="firstName"
            onChange={handleChangeInput}
            error={inputError.firstName}
          />
          <InputBar
            type="text"
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChangeInput}
            error={inputError.lastName}
          />
          <InputBar
            type="text"
            placeholder="Email"
            value={input.email}
            name="email"
            onChange={handleChangeInput}
            error={inputError.email}
          />
          <InputBar
            type="password"
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            error={inputError.password}
          />
          <InputBar
            type="password"
            placeholder="Confirm password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChangeInput}
            error={inputError.confirmPassword}
          />
          <div className="mt-4">
            <Button>SIGN UP</Button>
          </div>
        </form>
      </FormBox>
    </div>
  );
}
