import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

export default function LoginAndProfile({ onClick }) {
  const { authUser } = useAuth();
  return (
    <div className="flex gap-3">
      {authUser ? (
        <div className="flex gap-3">
          <h1 role="button" onClick={onClick} className="text-white text-2xl">
            Hello, {authUser?.firstName}
          </h1>
        </div>
      ) : (
        <div className="flex gap-3">
          <Link to="/login">
            <Menu>LOG IN</Menu>
          </Link>
          <h1 className="text-white text-2xl">|</h1>
          <Link to="/register">
            <Menu>REGISTER</Menu>
          </Link>
        </div>
      )}
    </div>
  );
}
