import { useContext } from "react";
import { CommentContext } from "../contexts/CommentContextProvider";

export default function useComment() {
  return useContext(CommentContext);
}
