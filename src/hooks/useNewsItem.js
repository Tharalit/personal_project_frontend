import { useContext } from "react";
import { NewsItemContext } from "../contexts/NewsItemProvider";

export default function useNewsItem() {
  return useContext(NewsItemContext);
}
