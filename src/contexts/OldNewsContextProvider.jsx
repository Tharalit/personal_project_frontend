import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import newsApi from "../apis/news";

export const OldNewsContext = createContext();

export default function OldNewsContextProvider({ children }) {
  const [oldNewsImage, setOldNewsImage] = useState("");
  const [oldNewsData, setOldNewsData] = useState([]);

  useEffect(() => {
    const fetchOldNews = async () => {
      try {
        const oldNewsImageData = await newsApi.getOldNews();
        setOldNewsData(oldNewsImageData.data);
      } catch (error) {
        console.log(error);
      } finally {
        setOldNewsImage("");
      }
    };
    fetchOldNews();
  }, []);

  const value = { oldNewsImage, oldNewsData };
  return (
    <OldNewsContext.Provider value={value}>{children}</OldNewsContext.Provider>
  );
}
