import React from "react";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";
import LoginAndProfile from "../components/LoginAndProfile";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { SearchResultsList } from "../components/SearchResultList";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);

  return (
    <div className="flex gap-3 items-center justify-between max-w-full h-32 shadow px-40 bg-gradient-to-r from-blue-500 to-blue-900">
      <div className="flex items-center gap-5">
        <Link to="/">
          <div className="flex flex-col items-center">
            <Logo />
          </div>
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="relative">
          <SearchBar placeholder="Search News" setResults={setResults} />
        </div>
        <div className="absolute top-[75px]">
          {results && results.length > 0 && (<SearchResultsList results={results} />)}
        </div>

        <LoginAndProfile onClick={() => setOpen((prev) => !prev)} />
      </div>
      {open && (
        <div className="absolute top-[80px] right-[160px]">
          <DropDown onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
