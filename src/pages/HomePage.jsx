import Home from "../components/Home";
import NewsContextProvider from "../contexts/NewsContextProvider";
import NewsItemContextProvider from "../contexts/NewsItemProvider";
import OldNewsContextProvider from "../contexts/OldNewsContextProvider";

export default function HomePage() {
  return (
    <NewsContextProvider>
      <OldNewsContextProvider>
        <Home />
      </OldNewsContextProvider>
    </NewsContextProvider>
  );
}
