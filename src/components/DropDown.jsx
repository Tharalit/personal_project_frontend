import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import FormBox from "./FormBox";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DropDown({ onClose }) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { logout, authUser } = useAuth();

  const handleClickLogout = () => {
    setOpen(false);
    logout();
    navigate("/login");
    alert("See you again");
  };

  return (
    <FormBox>
      {authUser?.isAdmin === false ? (
        <Link to="/favorite">
          <Button>Your Favorite</Button>
        </Link>
      ) : (
        <Link to="/createNews">
          <Button>Create News</Button>
        </Link>
      )}
      <Button onClickLogout={handleClickLogout}>LOG OUT</Button>
    </FormBox>
  );
}
