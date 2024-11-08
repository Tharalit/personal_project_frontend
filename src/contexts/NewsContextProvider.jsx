import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import newsApi from "../apis/news";

export const NewsContext = createContext();

export default function NewsContextProvider({ children }) {
  const [newsImage, setNewsImage] = useState("");
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsImage = async () => {
      try {
        const newsImageData = await newsApi.getNews();
        setNewsData(newsImageData.data);
      } catch (error) {
        console.error(error);
      } finally {
        setNewsImage("");
      }
    };
    fetchNewsImage();
  }, []);


  const deleteNewsByNewsId = async(newsId)=>{
    try {
      await newsApi.deleteNews(+newsId)
      alert("News has been deleted");
    } catch (error) {
      console.log(error)
    }
  }

  const value = {
    newsImage,
    newsData,
    deleteNewsByNewsId,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}
