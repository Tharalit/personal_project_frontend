import React from "react";
import TextGradient from "../components/TextGradient";
import BigImg from "../components/BigImg";
import ImgSmallThisWeek from "../components/ImgSmallThisWeek";
import useOld from "../hooks/useOld";
import { Link } from "react-router-dom";

export default function OldNews() {
  const { oldNewsData } = useOld();

  return (
    <div className="px-40">
      <div className="mt-10 mb-5">
        <TextGradient textSize="2xl">OLD SCHOOL - RETRO TOPIC</TextGradient>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          {oldNewsData.slice(-1).map((item) => (
            <div role="button">
              <Link
                to={`/news-latest/${item.id}`}
                key={item.id}
                state={{
                  image: item.image,
                  title: item.title,
                  message: item.message,
                }}
              >
                <BigImg
                  key={item.id}
                  src={item.image}
                  widthSize="1000px"
                  heightSize="555px"
                ></BigImg>
                <div className="mb-10 w-[73%]">
                  <div className="font-semibold ">
                    <TextGradient textSize="3xl">{item.title}</TextGradient>
                  </div>
                  <div className="line-clamp-2">{item.message}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="w-[73%]">
          <div className="grid grid-cols-2 gap-8 ml-[50px]">
            {oldNewsData
              .slice(-7, -1)
              .reverse()
              .map((item) => (
                <div className="flex flex-col">
                  <Link
                    to={`/news-latest/${item.id}`}
                    key={item.id}
                    state={{
                      image: item.image,
                      title: item.title,
                      message: item.message,
                    }}
                  >
                    <ImgSmallThisWeek
                      key={item.id}
                      src={item.image}
                      widthSize="400px"
                      heightSize="220px"
                    ></ImgSmallThisWeek>
                    <div className="mt-2">
                      <TextGradient textSize="2xl">{item.title}</TextGradient>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
