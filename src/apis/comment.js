import axios from "../config/axios";

const commentApi = {};


commentApi.createComment = (data)=>axios.post(`/comments/create-comment`,data)

commentApi.getComment = (newsId) => axios.get(`/comments/news/${newsId}/comments`);

commentApi.updateComment =(data)=> axios.patch (`/comments/update-comment`,data)

commentApi.deleteComment =(commentId)=> axios.delete (`/comments/delete-comment/${commentId}`)

export default commentApi;

