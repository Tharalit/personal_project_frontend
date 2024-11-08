import { useState } from "react";
import Button from "../components/Button";
import FormBox from "../components/FormBox";
import InputBar from "../components/InputBar";
import TextGradient from "../components/TextGradient";
import { useNavigate } from "react-router-dom";
import validateLogin from "../validators/validate-login";
import useAuth from "../hooks/useAuth";
import { AxiosError } from "axios";

const initialInput = {
  email: "",
  password: "",
};
const initialInputError = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const { login } = useAuth();

  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const error = validateLogin(input);
      if (error) {
        return setInputError(error);
      }

      setInputError(initialInputError);
      await login(input);
      navigate("/");
      alert("Login success");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const message =
          error.response?.status === 400
            ? "Invalid email or password"
            : "Internal server error";
        return alert(message);
      }
    }
  };

  return (
    <div className="mb-[138px] flex justify-center items-center">
      <FormBox>
        <TextGradient>LOG IN</TextGradient>
        <hr />
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col items-center justify-center"
          action=""
        >
          <InputBar
            type="text"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            error={inputError.email}
          />
          <InputBar
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            error={inputError.password}
          />
          <div className="mt-4">
            <Button>LOG IN</Button>
          </div>
        </form>
      </FormBox>
    </div>
  );
}
