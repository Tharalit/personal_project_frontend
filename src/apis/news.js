import axios from "../config/axios";

const newsApi = {};

newsApi.createNews = (body) => axios.post("/news/create-news", body);
newsApi.deleteNews = (newsId) => axios.delete(`/news/delete-news/${newsId}`);
newsApi.getNews = () => axios.get("/news/lastest-news");
newsApi.getOldNews = () => axios.get(`/news/old-news`);
newsApi.getNewsItem = (newsId) => axios.get(`/news/${newsId}`);

export default newsApi;
