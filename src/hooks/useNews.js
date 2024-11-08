import { useContext } from "react";

import { NewsContext } from "../contexts/NewsContextProvider";

export default function useNews() {
  return useContext(NewsContext);
}
