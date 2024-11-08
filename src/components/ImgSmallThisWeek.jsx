import React from "react";

export default function ImgSmallThisWeek({
  widthSize = "250px",
  heightSize = "130px",
  src,
}) {
  return (
    <img
      role="button"
      className={`w-[${widthSize}] h-[${heightSize}] bg-gray-200 rounded-lg`}
      src={src}
      alt=""
    />
  );
}
