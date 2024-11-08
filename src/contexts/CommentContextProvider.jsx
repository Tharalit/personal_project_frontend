import { useState, createContext } from "react";
import commentApi from "../apis/comment";


export const CommentContext = createContext();

export default function CommentContextProvider({ children }) {
  const [comments, setComments] = useState([]);
  
  
  const fetchCommentsbyNewsId = async (newsId) => {
    try {
      const commentData = await commentApi.getComment(newsId);
      setComments(commentData.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const createCommentByUserId = async (data) => {
    try {
      const createResponse = await commentApi.createComment(data)
      const commentData = createResponse.data
      setComments([commentData,...comments])
      return commentData
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCommentByUserId = async (commentId)=>{
    try {
      await commentApi.deleteComment(commentId)
    } catch (error) {
      console.log(error)
    }
  }

  const updateUserComment = async(data)=>{
    try {
      commentApi.updateComment(data)
    } catch (error) {
      console.log(error)
    }
  }

  const value = { comments,setComments,fetchCommentsbyNewsId,createCommentByUserId,deleteCommentByUserId,updateUserComment };
  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
}
