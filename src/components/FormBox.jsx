import { Children } from "react";

export default function FormBox({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="mt-10 p-4 flex flex-col justify-center items-center border-2 bg-white border-blue-500 rounded-md shadow-xl "
    >
      {children}
    </div>
  );
}
