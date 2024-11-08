import FavoriteList from "../components/FavoriteList";

import useFavorite from "../hooks/useFavorite";

export default function FavoritePage() {
  const { favorites } = useFavorite();

  return <FavoriteList favoriteNewsData={favorites} />;
}
