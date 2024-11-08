import { useEffect } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";
import newsApi from "../apis/news";
import { useState } from "react";

export const NewsItemContext = createContext();

export default function NewsItemContextProvider({ children }) {
  const [newsItem, setOldNewsItem] = useState("");
  const [newsItemData, setNewsItemData] = useState([]);

  const { newsId } = useParams();

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const newsItem = await newsApi.getNewsItem(newsId);
        setNewsItemData(newsItem);
      } catch (error) {
      } finally {
        setOldNewsItem("");
      }
    };
    fetchNewsItem;
  }, []);

  // console.log(newsItemData);

  const value = { newsItem, newsItemData };

  return (
    <NewsItemContext.Provider value={value}>
      {children}
    </NewsItemContext.Provider>
  );
}
