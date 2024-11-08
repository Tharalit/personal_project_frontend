import axios from "axios";

const favoriteApi = {}

favoriteApi.getFavoriteNews = (userId) => axios.get("/favorites/get-favorite",userId)
favoriteApi.addFavoriteNews = (newsId) => axios.post(`/favorites/add-favorite/${newsId}`)
favoriteApi.deleteFavoriteNews = (newsId) => axios.delete(`/favorites/delete-favorite/${newsId}`)

export default favoriteApi;