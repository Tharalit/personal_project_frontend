import { Link } from "react-router-dom";
import BigImg from "../components/BigImg";
import ImgOld from "../components/ImgOld";
import ImgSmallThisWeek from "../components/ImgSmallThisWeek";
import TextGradient from "../components/TextGradient";
import useNews from "../hooks/useNews";
import useOld from "../hooks/useOld";

export default function Home() {
  const { newsData } = useNews();
  const { oldNewsData } = useOld();

  return (
    <div className="px-40">
      <div>
        <div role="button" className="mt-10 mb-5 inline-block">
          <Link to="/news-latest">
            <TextGradient textSize="2xl">UPDATED NEWS</TextGradient>
          </Link>
        </div>
        <div className="flex justify-around">
          {newsData.slice(-1).map((item, index) => (
            <Link
              to={`/news-latest/${item.id}`}
              key={index}
              state={{
                image: item.image,
                title: item.title,
                message: item.message,
              }}
            >
              <BigImg
                key={index + 1}
                src={item.image}
                widthSize="1000px"
                heightSize="500px"
              ></BigImg>
              <TextGradient textSize="3xl">{item.title}</TextGradient>
            </Link>
          ))}

          <div className="flex flex-col w-[210px]">
            <div className="grid grid-rows-4 gap-3">
              {newsData
                .slice(-5, -1)
                .reverse()
                .map((item, index) => (
                  <Link
                    to={`/news-latest/${item.id}`}
                    key={index}
                    state={{
                      image: item.image,
                      title: item.title,
                      message: item.message,
                    }}
                  >
                    <ImgSmallThisWeek key={index + 1} src={item.image} />
                    <TextGradient textSize="xl">{item.title}</TextGradient>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[1.5px] mt-20" />
      <div>
        <div role="button" className="mt-10 mb-5 inline-block">
          <Link to="/old-news/">
            <TextGradient textSize="2xl">OLD SCHOOL - RETRO TOPIC</TextGradient>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <div>
            {oldNewsData.slice(-1).map((item, index) => (
              <Link
                to={`/news-latest/${item.id}`}
                key={index}
                state={{
                  image: item.image,
                  title: item.title,
                  message: item.message,
                }}
              >
                <BigImg
                  key={index + 1}
                  src={item.image}
                  widthSize="1000px"
                  heightSize="500px"
                ></BigImg>
                <TextGradient textSize="3xl">{item.title}</TextGradient>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-[50px]">
            {oldNewsData
              .slice(-7, -1)
              .reverse()
              .map((item, index) => (
                <Link
                  to={`/news-latest/${item.id}`}
                  key={index}
                  state={{
                    image: item.image,
                    title: item.title,
                    message: item.message,
                  }}
                >
                  <ImgOld key={item.id} src={item.image}></ImgOld>
                  <TextGradient textSize="xl">{item.title}</TextGradient>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
