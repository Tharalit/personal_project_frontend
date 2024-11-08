import { Link } from "react-router-dom";
import ImgSmallThisWeek from "./ImgSmallThisWeek";
import TextGradient from "./TextGradient";

export default function FavoriteList({ favoriteNewsData }) {
  return (
    <div className="px-40">
      <div className="mt-10">
        <TextGradient textSize="2xl">YOUR FAVORITE NEWS</TextGradient>
      </div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-2 gap-8">
          {favoriteNewsData?.map((item, index) => (
            <Link
              key={index}
              to={`/news-latest/${item.news.id}`}
              state={{
                image: item.news.image,
                title: item.news.title,
                message: item.news.message,
              }}
            >
              <ImgSmallThisWeek
                src={item.news.image}
                widthSize="350px"
                heightSize="180px"
              ></ImgSmallThisWeek>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
