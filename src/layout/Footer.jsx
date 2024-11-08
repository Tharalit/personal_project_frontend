import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="px-40 mt-20 h-[250px] bg-gradient-to-r from-blue-500 to-blue-900">
      <div className="flex flex-col gap-6">
        <div>
          <Link to="/">
            <Logo role="button" />
          </Link>
        </div>
        <div className="flex gap-14">
          <div role="button" className="text-white text-xl font-semibold">
            CONTACT
          </div>
          <div role="button" className="text-white text-xl font-semibold">
            SUPPORT
          </div>
        </div>
        <hr className="w-[100%]" />
        <div className="flex gap-10">
          <div className="text-white">Term &amp; Privacy</div>
          <div className="text-white">&copy; 2024 org.com</div>
        </div>
      </div>
    </div>
  );
}
