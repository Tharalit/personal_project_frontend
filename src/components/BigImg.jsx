export default function BigImg({ widthSize, heightSize, src }) {
  return (
    <div>
      <img
        role="button"
        className={`w-[${widthSize}] h-[${heightSize}] bg-gray-200 rounded-lg`}
        src={src}
        alt=""
      />
    </div>
  );
}
