export default function ImgOld({ src }) {
  return (
    <div>
      <img
        role="button"
        className="w-[300px] h-[150px] bg-gray-200 rounded-lg"
        src={src}
        alt=""
      />
    </div>
  );
}
