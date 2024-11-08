export default function TextGradient({ children, textSize = "3xl" }) {
  return (
    <div
      className={`text-${textSize} bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text`}
    >
      {children}
    </div>
  );
}
