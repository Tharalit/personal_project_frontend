export default function Button({ children, onClickLogout, type }) {
  return (
    <div
      className={`bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-500 flex justify-center m-2`}
    >
      <button
        type={type}
        onClick={onClickLogout}
        className="text-xl text-white"
      >
        {children}
      </button>
    </div>
  );
}
