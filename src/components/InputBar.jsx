export default function InputBar({
  type = "text",
  placeholder,
  value,
  name,
  onChange,
  error,
}) {
  return (
    <div>
      <div className="m-3 border-2 p-2 rounded-md">
        <input
          type={type}
          className="focus:outline-none"
          // className={`focus:outline-none ${
          //   error
          //     ? "border-red-500 focus:ring-red-300"
          //     : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
          // }`}
          // type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          error={error}
        />
      </div>
      {error ? <small className="text-red-500">{error}</small> : null}
    </div>
  );
}
