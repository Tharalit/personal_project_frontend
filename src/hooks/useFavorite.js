import { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContextProvider";

export default function useFavorite() {
  return useContext(FavoriteContext);
}
