import { useState, createContext } from "react";
import favoriteApi from "../apis/favorite";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {
  const {authUser}=useAuth()
  const userId = authUser?.id
  const [favorites, setFavorites] = useState([]);

  const fetchFavoritesbyUserId = async (userId) => {
    try {
      const favoritesData = await favoriteApi.getFavoriteNews(userId);
      setFavorites(favoritesData.data.allFavoriteNews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchFavoritesbyUserId(userId);
    }
  }, [userId]);


  const addFavoriteByUserId = async(newsId) => {
    try {
      favoriteApi.addFavoriteNews(newsId)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteFavoriteByUserId = async(newsId) => {
    try {
      favoriteApi.deleteFavoriteNews(newsId)
    } catch (error) {
      console.log(error)
    }
  }

  
  const value = { favorites,addFavoriteByUserId,deleteFavoriteByUserId };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
